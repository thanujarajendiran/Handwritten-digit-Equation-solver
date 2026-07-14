import cv2
import numpy as np


def merge_divide_symbol(boxes):
    """
    Merge the 3 contours of ÷ into one bounding box.
    """
    merged = []
    used = [False] * len(boxes)

    for i in range(len(boxes)):

        if used[i]:
            continue

        x, y, w, h = boxes[i]

        found = [i]

        cx = x + w // 2

        # Find nearby contours that share almost same x-center
        for j in range(i + 1, len(boxes)):

            if used[j]:
                continue

            x2, y2, w2, h2 = boxes[j]

            cx2 = x2 + w2 // 2

            if abs(cx - cx2) < 20:
                found.append(j)

        # If exactly 3 vertically aligned contours -> merge
        if len(found) == 3:

            xs = []
            ys = []
            xe = []
            ye = []

            for idx in found:

                used[idx] = True

                bx, by, bw, bh = boxes[idx]

                xs.append(bx)
                ys.append(by)
                xe.append(bx + bw)
                ye.append(by + bh)

            merged.append((
                min(xs),
                min(ys),
                max(xe) - min(xs),
                max(ye) - min(ys)
            ))

        else:

            merged.append(boxes[i])
            used[i] = True

    return merged


def segment_symbols(image_path):
    img = cv2.imread(image_path)

    if img is None:
        raise FileNotFoundError("Image not found")

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Blur removes small camera noise
    gray = cv2.GaussianBlur(gray, (5, 5), 0)

    # Adaptive threshold
    thresh = cv2.adaptiveThreshold(
        gray,
        255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY_INV,
        31,
        15
    )

    # Connect nearby pixels
    kernel = cv2.getStructuringElement(
        cv2.MORPH_RECT,
        (3, 3)
    )

    thresh = cv2.morphologyEx(
        thresh,
        cv2.MORPH_CLOSE,
        kernel,
        iterations=2
    )

    # Connected Components
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(
        thresh,
        connectivity=8
    )

    boxes = []

    for i in range(1, num_labels):

        x = stats[i, cv2.CC_STAT_LEFT]
        y = stats[i, cv2.CC_STAT_TOP]
        w = stats[i, cv2.CC_STAT_WIDTH]
        h = stats[i, cv2.CC_STAT_HEIGHT]
        area = stats[i, cv2.CC_STAT_AREA]

        if area < 100:
            continue

        padding = 10

        x = max(0, x - padding)
        y = max(0, y - padding)

        w = min(img.shape[1] - x, w + 2 * padding)
        h = min(img.shape[0] - y, h + 2 * padding)

        boxes.append((x, y, w, h))

    boxes.sort(key=lambda b: b[0])

    return img, thresh, boxes
if __name__ == "__main__":

    image_path = "test.jpeg"

    image, thresh, boxes = segment_symbols(image_path)

    print("Symbols found:", len(boxes))

    for i, (x, y, w, h) in enumerate(boxes):

        cv2.rectangle(
            image,
            (x, y),
            (x + w, y + h),
            (0, 255, 0),
            2
        )

        crop = thresh[y:y+h, x:x+w]

        cv2.imwrite(f"symbol_{i}.png", crop)

    cv2.imshow("Threshold", thresh)
    cv2.imshow("Detected Symbols", image)

    cv2.waitKey(0)
    cv2.destroyAllWindows()