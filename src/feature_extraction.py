import cv2
import numpy as np
image = cv2.imread("results/grayscale.jpg", cv2.IMREAD_GRAYSCALE)

if image is None:
    print("Error: Grayscale image not found!")
    exit()
image = cv2.resize(image, (28, 28))

edges = cv2.Canny(image, 50, 150)

contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

cv2.imwrite("results/edges.jpg", edges)

print("Feature Extraction Completed Successfully!")
print("Number of Contours:", len(contours))