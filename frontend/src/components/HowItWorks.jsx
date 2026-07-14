function HowItWorks() {
  const steps = [
    "Upload or Capture an Image",
    "AI Detects Handwritten Equation",
    "Recognizes Mathematical Symbols",
    "Solves Equation using SymPy",
    "Displays & Saves Result",
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition"
            >
              <div className="text-4xl font-bold text-purple-400 mb-4">
                {index + 1}
              </div>

              <p>{step}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;