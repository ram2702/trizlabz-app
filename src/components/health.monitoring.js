import React from "react";
import {
  notificon,
  profileicon,
  vehicleIcon,
  deploymentIcon,
  userIcon,
  fleetIcon,
  groupIcon,
  customerIcon,
  computerIcon,
  InternalIOlogo,
  motorsIcon,
  powerIcon,
  safetyIcon,
  sensorIcon,
  boltIcon,
  wheelIcon,
  usbIcon,
  OthersIcon,
} from "../img/monitoringImg";
import { useNavigate } from "react-router-dom";
import Keycloak from "keycloak-js";
import keycloakConfig from "../auth/keycloak.json";

const baseKaaPlatformUrl = "https://cloud.kaaiot.com";
const endpointID = "851b64bd-9298-49be-9169-096c7d1e60a4";
const applicationID = "cc3kq5idblahfr7uq3q0";

export default function Health(props) {
  const keycloak = new Keycloak(keycloakConfig);
  const token = props.props;
  const [error, setError] = React.useState(null);
  const [key, setKey] = React.useState();
  const [status, setStatus] = React.useState(1);
  const [posts, setPosts] = React.useState();
  const navigate = useNavigate();

  function handleClick(event) {
    if (event.target.id == "Computer") navigate("/computerPopUp");
    else if (event.target.id == "Motor") navigate("/motorPopUp");
    else if (event.target.id == "Power") navigate("/powerPopUp");
  }

  React.useEffect(() => {
    setTimeout(() => {
      setStatus(Math.random());
    }, 2000);
  }, [status]);
  React.useEffect(() => {
    if (token) fetchData();
  }, [status]);

  const fetchData = async () => {
    if (token) {
      try {
        const url = `${baseKaaPlatformUrl}/epts/api/v1/applications/${applicationID}/time-series/last?endpointId=${endpointID}&timeSeriesName=computer_parameters, motor_parameters, power_parameters`;
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        for (let key1 in data) {
          setKey(key1);
        }
        setPosts(data);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    } else {
      setError("Not authenticated");
      console.log("error");
    }
  };
  if (posts !== undefined) {
    console.log(posts[key]);
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
        <div className="label-one" id="Computer" onClick={handleClick}>
          <img
            src={computerIcon}
            alt="Label Icon"
            id="Computer"
            height={30}
            width={38}
          />
          <h4 id="Computer">Computer</h4>
          <span></span>
        </div>
        <div className="label-one">
          <img src={InternalIOlogo} alt="Label Icon" height={30} width={38} />
          <h4>Internal IOs</h4>
          <span></span>
        </div>
        <div className="label-one" id="Motor" onClick={handleClick}>
          <img
            src={motorsIcon}
            alt="Label Icon"
            id="Motor"
            height={30}
            width={38}
          />
          <h4 id="Motor">Motors</h4>
          <span id="Motor"></span>
        </div>
        <div className="label-one label-four" id="Power" onClick={handleClick}>
          <img
            id="Power"
            src={powerIcon}
            alt="Label Icon"
            height={31.65}
            width={21.1}
          />
          <h4 id="Power">Power System</h4>
          <span id="Power"></span>
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