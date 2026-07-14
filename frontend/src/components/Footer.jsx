function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h2 className="text-xl font-bold">
            AI Handwritten Equation Solver
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Developed by Thanuja Shree R
          </p>

          <p className="text-gray-500 text-sm">
            PENTAS HUB Internship Project
          </p>
        </div>

        <div className="text-gray-400 text-sm">
          © 2026 All Rights Reserved
        </div>

      </div>

    </footer>
  );
}

export default Footer;