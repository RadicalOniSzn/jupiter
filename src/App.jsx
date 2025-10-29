import React from "react";
import { Routes, Route } from "react-router-dom";
import Swap from "./pages/Swap";
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Swap />} />
      </Routes>
    </div>
  );
}

export default App;
