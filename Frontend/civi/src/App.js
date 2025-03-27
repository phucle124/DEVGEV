import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrangChu from "./HomePage";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<TrangChu />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<TrangChu />} />


      </Routes>
    </Router>
  );
}

export default App;
