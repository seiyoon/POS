import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import First from "./pages/First";
import Home from "./pages/Home";
import Open from "./pages/Open";
import Close from "./pages/Close";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/open" element={<Open />} />
        <Route path="/close" element={<Close />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
