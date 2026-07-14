import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-900 shadow-lg">
      <h1 className="text-2xl font-bold text-purple-500">
        AI Solver
      </h1>

      <div className="space-x-8">
        <Link to="/" className="hover:text-purple-400">Home</Link>

        <Link to="/solver" className="hover:text-purple-400">Solver</Link>

        <Link to="/about" className="hover:text-purple-400">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;