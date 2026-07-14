import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solver from "./pages/Solver";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solver" element={<Solver />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
