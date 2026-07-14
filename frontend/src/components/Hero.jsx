import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center pt-24 md:pt-32 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            AI Handwritten
            <br />
            Equation Solver
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Upload or capture handwritten mathematical equations.
            Our AI recognizes the equation and instantly solves it
            using Computer Vision, Transformers, CNN, and SymPy.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <Link
              to="/solver"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Try Solver
            </Link>

            <Link
              to="/about"
              className="border border-gray-500 hover:border-purple-500 px-8 py-4 rounded-xl font-semibold transition"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src={hero}
            alt="AI Solver"
            className="w-full max-w-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;