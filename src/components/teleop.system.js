import React from "react";
import "../css/teleop.css";
import { Box, Stack, Slider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Map from "../img/map.svg";
import Placeholder from "../img/livefeed.png";
import { Joystick } from "react-joystick-component";
import stick from "../img/stick.png";
import base from "../img/base.svg";
export default function TeleOp() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#FD841F",
        contrastText: "#fff",
      },
    },
  });

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tele-subcont">
      <article className="tele-drop-cont">
        <select className="tele-drop tele-drop-one">
          <option>Select Deployment</option>
          <option>Deployment 1</option>
        </select>
        <select className="tele-drop tele-drop-two">
          <option>Select Vehicle</option>
        </select>
        <select className="tele-drop tele-drop-three">
          <option>Select Fleet</option>
        </select>
      </article>

      <article className="tele-map">
        <span className="map-cont">
          <img src={Map} alt={"Map Image"} />
        </span>
        <span className="map-desc">
          <h3>Robot Description</h3>
          <p>
            Robot Id:
            <span style={{ color: "rgba(255,255,255,0.5)" }}> Celer 12 </span>
            <br />
            Velocity: <span style={{ color: "#FD841F" }}>1.56m&#47;s</span>{" "}
            <br />
            Yaw Rate: <span style={{ color: "#FD841F" }}>0.5m&#47;s</span>
          </p>
          <h4 className="desc">Max Yaw Rate</h4>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: 300 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                style={{ width: "100%" }}
              >
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "49px",
                    marginTop: "-1.25vh",
                  }}
                >
                  -
                </span>
                <Slider
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                  color="neutral"
                />
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "29px",
                    marginTop: "-0.25vh",
                    fontWeight: "600",
                  }}
                >
                  +{" "}
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontFamily: "Source Sans Pro",
                    marginTop: "-0.5vh",
                  }}
                >
                  0.75m&#47;s
                </span>
              </Stack>
            </Box>
          </ThemeProvider>
          <h4 className="desc">Max Velocity</h4>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: 300 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                style={{ width: "100%" }}
              >
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "49px",
                    marginTop: "-1.25vh",
                  }}
                >
                  -
                </span>
                <Slider
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                  color="neutral"
                />
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "29px",
                    marginTop: "-0.25vh",
                    fontWeight: "600",
                  }}
                >
                  +{" "}
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontFamily: "Source Sans Pro",
                    marginTop: "-0.5vh",
                  }}
                >
                  1.75m&#47;s
                </span>
              </Stack>
            </Box>
          </ThemeProvider>
        </span>
      </article>
      <article className="livefeed-cont">
        <img className="livefeed-video" src={Placeholder} alt="Livefeed" />
        <p>Live</p>

        <span className="joy">
          <Joystick
            size={250}
            baseImage={base}
            stickImage={stick}
            throttle={50}
          />
        </span>
      </article>
    </div>
  );
}
