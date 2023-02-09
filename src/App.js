import React from "react";
import "./css/core.css";
import CompPop from "./popups/comp.health";
import Monitoring from "./pages/monitoring";
import MotorPop from "./popups/motor.health";
import PowerPop from "./popups/power.health";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

export default function App() {
  React.useEffect(() => {
    console.log(document.all);
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Monitoring />} />
        <Route path="/computerPopUp" element={<CompPop props={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/motorPopUp" element={<MotorPop props={true} />} />
        <Route path="/powerPopUp" element={<PowerPop props={true} />} />
      </Routes>
    </BrowserRouter>
  );
}
