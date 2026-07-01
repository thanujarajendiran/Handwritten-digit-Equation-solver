import cv2
image = cv2.imread("images/digit_5_cropped.jpeg")

if image is None:
    print("Error: Image not found!")
    exit()

rotated = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)

flipped = cv2.flip(image, 1)

bright = cv2.convertScaleAbs(image, alpha=1.0, beta=40)

cv2.imwrite("results/rotated.jpg", rotated)
cv2.imwrite("results/flipped.jpg", flipped)
cv2.imwrite("results/bright.jpg", bright)

print("Dataset Enhancement Completed Successfully!")