import cv2
import numpy as np
from tensorflow.keras.models import load_model
model = load_model("results/cnn_digit_model.keras")
image = cv2.imread("images/digit_5_cropped.jpeg", cv2.IMREAD_GRAYSCALE)
if image is None:
    print("Image not found!")
    exit()
image = cv2.resize(image, (28, 28))
image = cv2.bitwise_not(image)
image = image / 255.0
image = image.reshape(1, 28, 28, 1)
prediction = model.predict(image)
digit = np.argmax(prediction)
print("Predicted Digit:", digit)