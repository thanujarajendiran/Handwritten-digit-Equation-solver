import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X, ImageIcon } from "lucide-react";
import Loader from "./Loader";
import { solveEquation } from "../services/api";
import ResultCard from "./ResultCard";
import HistoryPanel from "./HistoryPanel";
import CameraCapture from "./CameraCapture";
function UploadCard() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {

  console.log("Dropped files:", acceptedFiles);

  const selected = acceptedFiles[0];

  if (!selected) return;

  setFile(selected);
  setPreview(URL.createObjectURL(selected));

}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });
  

  function removeImage() {
    setFile(null);
    setPreview(null);
  }
  async function handleSolve() {
    console.log("Solve button clicked");
    if (!file) {
        alert("Please upload an image.");
        return;
    }

    setLoading(true);
 
    try {

    const data = await solveEquation(file);
    console.log(data);

    setResult(data);
    setHistory((prev) => [data, ...prev]);

    } catch (error) {

     alert("Backend connection failed.");

     console.error(error);

    }

   setLoading(false);

  }

  return (
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

      <h2 className="text-3xl font-bold text-center mb-6">
        Upload Handwritten Equation
      </h2>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all
        ${
          isDragActive
            ? "border-purple-400 bg-purple-500/20"
            : "border-gray-500 hover:border-purple-500 hover:bg-white/5"
        }`}
      >
        <input {...getInputProps()} />

        <UploadCloud
          size={60}
          className="mx-auto text-purple-400"
        />

        <p className="mt-4 text-lg font-semibold">
          Drag & Drop Image Here
        </p>

        <p className="text-gray-400 mt-2">
          or click to browse
        </p>
      </div>
      <button
        onClick={() => setCameraOpen(true)}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 rounded-xl py-3 font-bold"
      >
         📷 Open Camera
      </button>
      {cameraOpen && (
        <CameraCapture
           onCapture={(capturedFile) => {
               setFile(capturedFile);
               setPreview(URL.createObjectURL(capturedFile));
               setCameraOpen(false);
           }}
           onClose={() => setCameraOpen(false)}
        />
     )}

      {preview && (
        <div className="mt-8">

          <div className="flex justify-between items-center mb-4">

            <div className="flex items-center gap-2">

              <ImageIcon />

              <span>{file.name}</span>

            </div>

            <button
              onClick={removeImage}
              className="bg-red-500 p-2 rounded-full hover:bg-red-600"
            >
              <X size={18} />
            </button>

          </div>

          <img
            src={preview}
            alt="preview"
            className="rounded-2xl shadow-xl w-full max-h-96 object-contain"
          />
        </div>
      )}
      {loading && <Loader />}
      {result && <ResultCard result={result} />}
      


      <button
        onClick={handleSolve}
        disabled={loading}
        className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all disabled:opacity-50"
     >
        {loading ? "Processing..." : "Solve Equation"}
     </button>
     {history.length > 0 && (
       <div className="mt-10">
           <HistoryPanel history={history} />
       </div>
    )}

    </div>
  );
}

export default UploadCard;