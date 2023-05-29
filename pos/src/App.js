import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import First from "./pages/First";
import Home from "./pages/Home";
import Open from "./pages/Open";
import Close from "./pages/Close";
import Pay from "./pages/Pay";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/home" element={<Home />} />
          <Route path="/open" element={<Open />} />
          <Route path="/close" element={<Close />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
