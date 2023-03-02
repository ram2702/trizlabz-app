import React from "react";
import "../css/customer.css";
import {
  vehicleIcon,
  customerIcon,
  computerIcon,
  searchIcon,
} from "../img/monitoringImg";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Customer() {
  const [white, setWhite] = React.useState(false);
  const searchIcon = (
    <FontAwesomeIcon className="search-icon" icon={faSearch} />
  );
  const filterIcon = <FontAwesomeIcon icon={faFilter} />;

  function handleClick(event) {
    console.log(event.target.name);
  }

  return (
    <div className="cus-subcont">
      <article className="cus-sub-head">
        <span className="cus-main-txt">
          <h1>iFLEET</h1>
          <h3>Welcome to Trizlabz</h3>
        </span>
        <article className="cus-cards">
          <div className="cus-card-items">
            <h3 className="cus-card-title">Vehicles</h3>
            <span className="cus-card-label">
              <img
                className="cus-label-icon"
                src={vehicleIcon}
                alt="Vehicle Icon"
                height={42.7}
                width={42.7}
              />
              <h4 className="cus-label-text">7</h4>
            </span>
            <p className="cus-card-desc">No of Vehicles Deployed</p>
          </div>
          <div className="cus-card-items">
            <h3 className="cus-card-title">Customers</h3>
            <span className="cus-card-label">
              <img
                className="cus-label-icon cus-label-icon-six"
                src={customerIcon}
                alt="Vehicle Icon"
                height={60}
                width={60}
              />
              <h4 className="cus-label-text">7</h4>
            </span>
            <p className="cus-card-desc">Total No. of Customers</p>
          </div>
        </article>
      </article>
      <div className="cus-box">
        <article className="cus-box-row-one">
          <h2>Customers</h2>
          <div>
            <span>
              {searchIcon}
              <input
                type={"text"}
                placeholder={`Search`}
                className="search-input"
              />
              <button className="search-filter">{filterIcon} Filter</button>
              <button
                name="addCustomer"
                className="add-cus-button"
                onClick={handleClick}
              >
                {" "}
                + Add Customer{" "}
              </button>
            </span>
          </div>
        </article>
        <article>
          <p className="Empty-box">No Customers Added</p>
        </article>
      </div>
    </div>
  );
}
