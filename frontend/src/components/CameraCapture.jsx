import Webcam from "react-webcam";
import { useRef } from "react";

function CameraCapture({ onCapture, onClose }) {

  const webcamRef = useRef(null);

  const capture = () => {

    const imageSrc = webcamRef.current.getScreenshot();

    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {

        const file = new File(
          [blob],
          "camera-image.jpg",
          { type: "image/jpeg" }
        );

        onCapture(file);

      });

  };

  return (

    <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-2xl w-full"
      />

      <div className="flex gap-4 mt-6">

        <button
          onClick={capture}
          className="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-3 font-bold"
        >
          📸 Capture
        </button>

        <button
          onClick={onClose}
          className="flex-1 bg-red-600 hover:bg-red-700 rounded-xl py-3 font-bold"
        >
          Close
        </button>

      </div>

    </div>

  );

}

export default CameraCapture;