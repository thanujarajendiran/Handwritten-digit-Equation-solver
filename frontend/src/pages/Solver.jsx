import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import Footer from "../components/Footer";

function Solver() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      <div className="py-20 px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          AI Equation Solver
        </h1>

        <UploadCard />

      </div>
      <Footer />

    </div>
  );
}

export default Solver;