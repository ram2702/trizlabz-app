import React from "react";
import Navbar from "../components/navbar";
import Health from "../components/health.monitoring";
import CompPop from "../popups/comp.health";
export default function Monitoring({ props }) {
  return (
    <>
      <div className="page-cont">
        <Navbar />
        <Health />
      </div>
    </>
  );
}
