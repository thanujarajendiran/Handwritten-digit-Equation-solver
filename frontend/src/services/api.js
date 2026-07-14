const API = "http://127.0.0.1:8000";

export async function solveEquation(file) {

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API}/predict`, {
    method: "POST",
    body: formData,
  });

  return await response.json();
}