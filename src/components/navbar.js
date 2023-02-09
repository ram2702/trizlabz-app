import React from "react";
import "../css/navStyle.css";
import logo from "../img/Trizlabz_logo__1_-removebg-preview 1.png";
import dashlogo from "../img/dashpic.png";
import monlogo from "../img/monitoring.svg";
import syslogo from "../img/systemlogo.svg";
import setlogo from "../img/setuplogo.svg";
import admlogo from "../img/adminlogo.svg";
import helplogo from "../img/helplogo.svg";
export default function Navbar() {
  return (
    <nav className="nav-cont">
      <img src={logo} alt="Trizlabz-logo" className="trizlabz-logo" />
      <div className="nav-items">
        <div className="nav-card">
          <span className="nav-content">
            <img src={dashlogo} alt="Trizlabz-logo" className="nav-logo" />
            <p className="nav-txt">Dashboard</p>
          </span>
          <ol className="sub-content">
            <li>Dashboard 1</li>
            <li>Dashboard 2</li>
            <li>Dashboard 3</li>
            <li>Dashboard 4</li>
          </ol>
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <img src={monlogo} alt="Trizlabz-logo" className="nav-logo" />
            <p className="nav-txt">Monitoring</p>
          </span>
          <ol className="sub-content">
            <li>Health</li>
            <li>Trends</li>
            <li>Mission</li>
            <li>Telementry Log</li>
            <li>System Log</li>
          </ol>
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <img src={syslogo} alt="Trizlabz-logo" className="nav-logo" />
            <p className="nav-txt">System</p>
          </span>
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <img src={setlogo} alt="Trizlabz-logo" className="nav-logo" />
            <p className="nav-txt">Setup</p>
          </span>
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <img src={admlogo} alt="Trizlabz-logo" className="nav-logo" />
            <p className="nav-txt">Administration</p>
          </span>
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <img src={helplogo} alt="Trizlabz-logo" className="nav-logo" />
            <p className="nav-txt">Help</p>
          </span>
        </div>
      </div>
    </nav>
  );
}
