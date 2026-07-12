import os
import cv2
import numpy as np
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras import layers, models
dataset_path = "data/dataset"
images = []
labels = []
class_names = sorted(os.listdir(dataset_path))
for label, class_name in enumerate(class_names):
    class_folder = os.path.join(dataset_path, class_name)
    for filename in os.listdir(class_folder):
        image_path = os.path.join(class_folder, filename)
        image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
        if image is None:
            continue
        image = cv2.resize(image, (28, 28))
        image = image / 255.0
        images.append(image)
        labels.append(label)
images = np.array(images)
labels = np.array(labels)
images = images.reshape(-1, 28, 28, 1)
x_train, x_test, y_train, y_test = train_test_split(
    images,
    labels,
    test_size=0.2,
    random_state=42
)
print("Training images:", len(x_train))
print("Testing images:", len(x_test))
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
model = Sequential([
    Conv2D(32, (3,3), activation="relu", input_shape=(28,28,1)),
    MaxPooling2D((2,2)),
    Conv2D(64, (3,3), activation="relu"),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(128, activation="relu"),
    Dense(len(class_names), activation="softmax")
])
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)
history = model.fit(
    x_train,
    y_train,
    epochs=10,
    validation_data=(x_test, y_test)
)
loss, accuracy = model.evaluate(x_test, y_test)
print("\nTest Accuracy:", accuracy)
model.save("results/cnn_symbol_model.keras")
print("CNN Symbol model saved successfully!")