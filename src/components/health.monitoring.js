import React from "react";
import "../css/monitoring.css";
import notificon from "../img/notificon.png";
import profileicon from "../img/profileicon.png";
import vehicleIcon from "../img/vehicleIcon.svg";
import deploymentIcon from "../img/deploymentIcon.png";
import userIcon from "../img/userIcon.svg";
import fleetIcon from "../img/fleetIcon.svg";
import groupIcon from "../img/groupIcon.png";
import customerIcon from "../img/customerIcon.png";
import computerIcon from "../img/computerIcon.png";
import InternalIOlogo from "../img/InternalIOlogo.png";
import motorsIcon from "../img/motorsIcon.png";
import powerIcon from "../img/powerIcon.png";
import safetyIcon from "../img/safetyIcon.png";
import sensorIcon from "../img/sensorIcon.png";
import boltIcon from "../img/boltIcon.png";
import wheelIcon from "../img/wheelIcon.png";
import usbIcon from "../img/usbIcon.png";
import OthersIcon from "../img/OthersIcon.png";
import CompPop from "../popups/comp.health";
import { useNavigate } from "react-router-dom";

export default function Health() {
  const [status, setStatus] = React.useState("red");
  console.log(document.all);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/computerPopUp");
  }
  return (
    <div className="content-cont">
      <article className="sub-head">
        <span className="main-txt">
          <h1>IFLEET</h1>
          <h3>Welcome to Trizlabz</h3>
        </span>
        <span className="icon-holder">
          <img
            src={notificon}
            alt="Notification icon"
            height={54.38}
            width={48.75}
            className="notificon"
          />
          <img
            src={profileicon}
            alt="Notification icon"
            height={50}
            width={50}
            className="profileicon"
          />
        </span>
      </article>
      <article className="drop-cont">
        <select className="drop drop-one">
          <option>Select Deployment</option>
          <option>Deployment 1</option>
        </select>
        <select className="drop drop-two">
          <option>Select Vehicle</option>
        </select>
        <select className="drop drop-three">
          <option>Select Fleet</option>
        </select>
      </article>
      <article className="cards">
        <div className="card-items">
          <h3 className="card-title">Vehicles</h3>
          <span className="card-label">
            <img
              className="label-icon"
              src={vehicleIcon}
              alt="Vehicle Icon"
              height={42.7}
              width={42.7}
            />
            <h4 className="label-text">7</h4>
          </span>
          <p className="card-desc">No of Vehicles Deployed</p>
        </div>
        <div className="card-items">
          <h3 className="card-title">Deployment</h3>
          <span className="card-label">
            <img
              className="label-icon label-icon-two"
              src={deploymentIcon}
              alt="Vehicle Icon"
              height={75}
              width={75}
            />
            <h4 className="label-text">3</h4>
          </span>
          <p className="card-desc">Total No. of Dept. Area</p>
        </div>
        <div className="card-items">
          <h3 className="card-title">Users</h3>
          <span className="card-label">
            <img
              className="label-icon  label-icon-three"
              src={userIcon}
              alt="Vehicle Icon"
              height={61}
              width={61}
            />
            <h4 className="label-text">10</h4>
          </span>
          <p className="card-desc">Total Number of Users</p>
        </div>
        <div className="card-items">
          <h3 className="card-title">Fleet</h3>
          <span className="card-label">
            <img
              className="label-icon"
              src={fleetIcon}
              alt="Vehicle Icon"
              height={50}
              width={50}
            />
            <h4 className="label-text">7</h4>
          </span>
          <p className="card-desc">Total Number of Fleets</p>
        </div>
        <div className="card-items">
          <h3 className="card-title">Groups</h3>
          <span className="card-label">
            <img
              className="label-icon  label-icon-five"
              src={groupIcon}
              alt="Vehicle Icon"
              height={50}
              width={50}
            />
            <h4 className="label-text">7</h4>
          </span>
          <p className="card-desc">Total Number of Groups</p>
        </div>
        <div className="card-items">
          <h3 className="card-title">Customers</h3>
          <span className="card-label">
            <img
              className="label-icon label-icon-six"
              src={customerIcon}
              alt="Vehicle Icon"
              height={60}
              width={60}
            />
            <h4 className="label-text">7</h4>
          </span>
          <p className="card-desc">Total No. of Customers</p>
        </div>
      </article>
      <hr className="hr" />
      <article className="labels">
        <div className="label-one" onClick={handleClick}>
          <img src={computerIcon} alt="Label Icon" height={30} width={38} />
          <h4>Computer</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={InternalIOlogo} alt="Label Icon" height={30} width={38} />
          <h4>Internal IOs</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={motorsIcon} alt="Label Icon" height={30} width={38} />
          <h4>Motors</h4>
          <span></span>
        </div>
        <div className="label-one label-four">
          <img src={powerIcon} alt="Label Icon" height={31.65} width={21.1} />
          <h4>Power System</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={safetyIcon} alt="Label Icon" height={40} width={40} />
          <h4>Safety Systems</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={sensorIcon} alt="Label Icon" height={30} width={38} />
          <h4>Sensors</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={boltIcon} alt="Label Icon" height={30} width={38} />
          <h4>IMU</h4>
          <span style={{ "background-color": status }}></span>
        </div>
        <div className="label-one">
          <img src={wheelIcon} alt="Label Icon" height={40} width={40} />
          <h4>Wheel Encoder</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={usbIcon} alt="Label Icon" height={30} width={38} />
          <h4>Serial Interface</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={OthersIcon} alt="Label Icon" height={35} width={35} />
          <h4>Others</h4>
          <span></span>
        </div>
      </article>
    </div>
  );
}
