import React from "react";
import "./css/core.css";
import Navbar from "./components/navbar";
import Health from "./components/health.monitoring";
import CompPop from "./popups/comp.health";
import Monitoring from "./pages/monitoring";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Monitoring />} />
        <Route path="/computerPopUp" element={<CompPop props={true} />} />
      </Routes>
    </BrowserRouter>
  );
}
