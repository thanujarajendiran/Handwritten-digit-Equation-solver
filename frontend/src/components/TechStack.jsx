function TechStack() {
  const techs = [
    "Python",
    "FastAPI",
    "React + Vite",
    "OpenCV",
    "Transformers (TrOCR)",
    "SymPy",
    "TensorFlow / CNN",
    "Tailwind CSS",
  ];

  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Technologies Used
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-6 text-center font-semibold hover:bg-purple-600 transition duration-300"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack;