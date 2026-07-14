import Footer from "../components/Footer";
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-8 py-12">

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          About the Project
        </h1>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            AI Handwritten Equation Solver
          </h2>

          <p className="text-base sm:text-lg leading-8 text-gray-300 mt-4">
            This project recognizes handwritten mathematical equations from images,
            converts them into digital text using Artificial Intelligence,
            and solves them automatically.
          </p>

          <div className="mt-8">

            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Features
            </h3>

            <ul className="space-y-2 text-gray-300 list-disc ml-6">
              <li>Handwritten Equation Recognition</li>
              <li>Image Upload</li>
              <li>Camera Capture</li>
              <li>Drag & Drop Upload</li>
              <li>Equation Solving using SymPy</li>
              <li>History Panel</li>
              <li>Download Result</li>
              <li>Responsive Modern UI</li>
              <li>Mobile-Friendly Design</li>
            </ul>

          </div>

          <div className="mt-8">

            <h3 className="text-2xl font-semibold mb-3">
              Technologies Used
            </h3>

            <ul className="space-y-2 text-gray-300 list-disc ml-6">
              <li>Python</li>
              <li>FastAPI</li>
              <li>React + Vite</li>
              <li>OpenCV</li>
              <li>Transformers (TrOCR)</li>
              <li>TensorFlow / CNN</li>
              <li>SymPy</li>
            </ul>

          </div>

        </div>

      </div>
      <Footer />

    </div>
  );
}

export default About;