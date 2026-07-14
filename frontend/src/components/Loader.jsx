import { useEffect, useState } from "react";

function Loader() {
  const steps = [
    "📷 Reading image...",
    "✍ Recognizing handwriting...",
    "🧠 Detecting mathematical symbols...",
    "🧮 Solving equation...",
    "✅ Preparing results..."
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">

      <div className="flex justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <h2 className="text-center text-2xl font-bold mt-6">
        AI Processing...
      </h2>

      <div className="mt-6 space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`transition-all ${
              index <= currentStep
                ? "text-green-400 font-semibold"
                : "text-gray-400"
            }`}
          >
            {index <= currentStep ? "✔ " : "⏳ "}
            {step}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Loader;