import cv2

image = cv2.imread("images/digit_5_cropped.jpeg")

if image is None:
    print("Image not found!")
    exit()

display = cv2.resize(image, (400, 500))

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
resized = cv2.resize(gray, (28, 28))
blurred = cv2.GaussianBlur(resized, (3, 3), 0)

cv2.imwrite("results/grayscale.jpg", gray)
cv2.imwrite("results/resized.jpg", resized)
cv2.imwrite("results/blurred.jpg", blurred)


print("Image processing completed successfully!")