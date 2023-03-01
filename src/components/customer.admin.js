import React from "react";
import "../css/customer.css";
import { vehicleIcon, customerIcon } from "../img/monitoringImg";
export default function Customer() {
  return (
    <div className="cus-subcont">
      <article className="sub-head">
        <span className="main-txt">
          <h1>iFLEET</h1>
          <h3>Welcome to Trizlabz</h3>
        </span>
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
        </article>
      </article>
    </div>
  );
}
