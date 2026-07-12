import os
import cv2
import numpy as np
dataset_path = "data/dataset"
images = []
labels = []
class_names = []
class_names = sorted(os.listdir(dataset_path))

print("Classes found:")
print(class_names)
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
print("Total images loaded:", len(images))
print("Total labels:", len(labels))
images = np.array(images)
labels = np.array(labels)
images = images.reshape(-1, 28, 28, 1)
print("Image shape:", images.shape)
print("Label shape:", labels.shape)