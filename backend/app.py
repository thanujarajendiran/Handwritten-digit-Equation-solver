from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from solver import solve_image

app = FastAPI(title="AI Handwritten Equation Solver API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Later you can restrict this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "AI Handwritten Equation Solver API is Running 🚀"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = solve_image(filepath)

    return result