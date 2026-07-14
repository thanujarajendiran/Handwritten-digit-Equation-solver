# 🧠 AI Handwritten Equation Solver

An AI-powered application that recognizes handwritten mathematical equations from images, converts them into editable text using OCR, solves the equations, and displays the solution through a modern web interface.

---

# 📌 Project Overview

This project was developed as part of an internship program to learn Machine Learning, Computer Vision, Deep Learning, OCR, and Full Stack Development.

The project progressed week by week, starting from basic machine learning concepts and gradually building into a complete AI-powered Handwritten Equation Solver.

---

# 🎯 Objectives

* Recognize handwritten digits and mathematical symbols.
* Process handwritten equation images.
* Convert handwritten equations into editable text.
* Solve mathematical equations automatically.
* Display results through an interactive web application.

---

# 🛠 Technologies Used

## Programming Language

* Python
* JavaScript

## Machine Learning & Deep Learning

* TensorFlow / Keras
* CNN (Convolutional Neural Networks)
* TrOCR (Transformer OCR)

## Computer Vision

* OpenCV
* Pillow (PIL)

## Mathematical Processing

* SymPy

## Backend

* FastAPI
* Uvicorn

## Frontend

* React
* Vite
* HTML
* CSS

## Libraries

* Transformers
* Torch (PyTorch)
* NumPy
* SentencePiece
* Accelerate

---

# 📂 Project Structure

```
AI-Handwritten-Equation-Solver/

│
├── backend/
│   ├── app.py
│   ├── solver.py
│   ├── segment.py
│   ├── requirements.txt
│   └── model/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── src/
│   ├── train.py
│   ├── predict.py
│   ├── cnn_train.py
│   ├── cnn_symbol_train.py
│   ├── prepare_dataset.py
│   ├── image_processing.py
│   ├── feature_extraction.py
│   └── dataset_enhancement.py
│
├── data/
├── images/
├── results/
├── README.md
└── week1.py
```

---

# 📅 Weekly Progress

---

## ✅ Week 1 – Machine Learning Fundamentals

### Tasks Completed

* Learned basic Machine Learning concepts.
* Built a basic digit classifier.
* Prepared project structure.
* Created training and prediction scripts.
* Trained the first model.
* Evaluated model accuracy.

### Files

* week1.py
* train.py
* predict.py

### Learning Outcome

* Introduction to Machine Learning
* Dataset preparation
* Model training
* Prediction workflow

---

## ✅ Week 2 – Image Processing & Feature Engineering

### Tasks Completed

* Image preprocessing
* Grayscale conversion
* Image resizing
* Noise removal
* Image enhancement
* Edge detection
* Feature extraction
* Dataset enhancement using augmentation

### Files

* image_processing.py
* feature_extraction.py
* dataset_enhancement.py

### Technologies

* OpenCV
* NumPy

### Learning Outcome

* Computer Vision fundamentals
* Image preprocessing
* Feature extraction
* Data augmentation

---

## ✅ Week 3 – CNN for Digit & Symbol Recognition

### Tasks Completed

* Created dataset for digits
* Created dataset for mathematical symbols
* Trained CNN model
* Built prediction pipeline
* Improved recognition accuracy

### Mathematical Symbols

* *
* *
* ×
* ÷
* =

### Files

* cnn_train.py
* cnn_symbol_train.py
* cnn_predict.py
* prepare_dataset.py

### Technologies

* TensorFlow
* Keras
* CNN

### Learning Outcome

* Deep Learning
* CNN Architecture
* Image Classification
* Symbol Recognition

---

## ✅ Week 4 – Handwritten Equation Recognition

### Tasks Completed

* Integrated Microsoft's TrOCR model
* Converted handwritten equations into editable text
* Connected OCR pipeline with backend
* Improved handwritten recognition accuracy

### Technologies

* Transformers
* TrOCR
* PyTorch

### Learning Outcome

* Transformer Models
* OCR
* Sequence Prediction

---

## ✅ Week 5 – Complete AI Equation Solver

### Backend

Developed REST APIs using FastAPI.

Features:

* Image Upload
* OCR Processing
* Equation Solving
* JSON Response

### Frontend

Developed a modern React application.

Features:

* Image Upload
* Camera Capture
* Result Display
* History Panel
* Responsive UI

### Equation Solver

* Converts image into equation
* Solves using SymPy
* Returns final answer

### Technologies

* FastAPI
* React
* Vite
* SymPy

---

# 🚀 Features

* Handwritten digit recognition
* Mathematical symbol recognition
* Image preprocessing
* OCR using TrOCR
* Automatic equation solving
* FastAPI REST API
* React Frontend
* Camera Capture
* Image Upload
* Solution History
* Responsive UI

---

# ▶️ Running the Project

## Backend

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📊 Workflow

```
Image Upload
      ↓
Image Preprocessing
      ↓
Character Segmentation
      ↓
TrOCR Recognition
      ↓
Equation Extraction
      ↓
SymPy Solver
      ↓
Display Result
```

---

# 📚 Skills Gained

* Machine Learning
* Deep Learning
* CNN
* Computer Vision
* OCR
* Transformers
* FastAPI
* React
* REST API Development
* Git & GitHub
* Full Stack AI Development

---

# 👩‍💻 Author

**Thanuja Shree R**

AI Handwritten Equation Solver

Internship Project

2026
