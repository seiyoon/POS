import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Close from "./pages/Close";
import Pay from "./pages/Pay";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/open" element={<Order />} />
          <Route path="/close" element={<Close />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
