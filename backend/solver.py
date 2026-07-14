from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from PIL import Image
import sympy as sp
import cv2
import re
import numpy as np

print("Loading Transformer Model...")


processor = TrOCRProcessor.from_pretrained(
    "microsoft/trocr-large-handwritten"
)
model = VisionEncoderDecoderModel.from_pretrained(
    "microsoft/trocr-large-handwritten"
)
print("Model Loaded Successfully!")


def preprocess_image(image_path):
    # Read image
    img = cv2.imread(image_path)

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Remove noise
    gray = cv2.GaussianBlur(gray, (3, 3), 0)

    # Binarize image
    _, gray = cv2.threshold(
        gray,
        0,
        255,
        cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )
    h, w = gray.shape

    scale = 384 / max(h, w)

    new_w = int(w * scale)
    new_h = int(h * scale)

    gray = cv2.resize(gray, (new_w, new_h))

    canvas = 255 * np.ones((384, 384), dtype="uint8")

    x = (384 - new_w) // 2
    y = (384 - new_h) // 2

    canvas[y:y+new_h, x:x+new_w] = gray

    gray = canvas

    # Convert back to RGB PIL image
    image = Image.fromarray(gray).convert("RGB")

    return image


def solve_image(image_path):

    image = preprocess_image(image_path)

    pixel_values = processor(
        images=image,
        return_tensors="pt"
    ).pixel_values

    generated_ids = model.generate(
        pixel_values,
        max_new_tokens=20
    )

    equation = processor.batch_decode(
        generated_ids,
        skip_special_tokens=True
    )[0]
    # Remove spaces
    equation = equation.replace(" ", "")

    

    # OCR corrections
    equation = equation.replace("÷", "/")
    equation = equation.replace("×", "*")
    equation = equation.replace("x", "*")
    equation = equation.replace("X", "*")
    equation = equation.replace("—", "-")
    equation = equation.replace("–", "-")

    # Remove spaces
    equation = equation.replace(" ", "")

    # Remove duplicate operators
    equation = re.sub(r"\++", "+", equation)
    equation = re.sub(r"--+", "-", equation)
    equation = re.sub(r"\*\*+", "*", equation)
    equation = re.sub(r"//+", "/", equation)

    # Remove invalid characters
    equation = re.sub(r"[^0-9+\-*/().]", "", equation)

    # Remove operators from beginning/end
    equation = equation.strip("+-*/.")
    print("Recognized Equation:", equation)

    # Clean OCR output
    expression = equation

    # Remove invalid ending characters
    while expression.endswith("."):
        expression = expression[:-1]

    try:
        answer = sp.sympify(expression).evalf()
    except Exception:
        answer = "Unable to solve"
    print("Expression sent to SymPy:", expression)
    return {
        "equation": equation,
        "answer": str(answer)
    }