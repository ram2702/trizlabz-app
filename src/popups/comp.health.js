import React from "react";
import { useNavigate } from "react-router-dom";
import Health from "../components/health.monitoring";
import Navbar from "../components/navbar";
import "../css/compPopup.css";
import computerIcon from "../img/computerIcon.png";
import cpupop1 from "../img/cpupop1.svg";
import cpupop2 from "../img/cpupop2.svg";
import cpupop3 from "../img/cpupop3.svg";
import cpupop4 from "../img/cpupop4.svg";
// import closeButton from "../img/closeButton.png";
export default function CompPop({ props }) {
  console.log(props);
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(props);
  function handleClick() {
    navigate("/");
    setVisible(false);
  }
  return (
    <>
      {visible && (
        <div className="pop-cont">
          <article className="pop-box">
            <span className="pop-head">
              <img src={computerIcon} alt="Icon" width={38.53} height={30.7} />
              <h4>Computer</h4>
              <button onClick={handleClick}></button>
            </span>
            <div className="pop-card">
              <h5>CPU 1</h5>
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>99%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>92&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>4200 rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>1.2 GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <h5>CPU 2</h5>
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>99%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>92&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>4200 rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>1.2 GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <h5>CPU 3</h5>
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>99%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>92&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>4200 rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>1.2 GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <h5>CPU 4</h5>
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>99%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>92&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>4200 rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>1.2 GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <h5>CPU 5</h5>
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>99%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>92&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>4200 rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>1.2 GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
          </article>
        </div>
      )}
      <div className="page-cont">
        <Navbar />
        <Health />
      </div>
    </>
  );
}
