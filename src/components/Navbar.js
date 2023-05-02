import "../styles/navbar.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faAngleDown,
  faAngleUp,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import MediaQuery from "react-responsive";

export default function Navbar() {
  const [Show, setShow] = useState(false);

  return (
    <>
      <MediaQuery minWidth={991}>
        <div className="main">
          <div className="left">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="right">
            <div className="items">Premium</div>
            <div className="items">Support</div>
            <div className="items">Download</div>
            <div>|</div>
            <div
              onClick={() => setShow(!Show)}
              className="items"
              style={{ color: Show ? "rgb(48, 150, 48)" : "aliceblue" }}
            >
              <FontAwesomeIcon className="profile" icon={faCircleUser} />
              &nbsp; Profile &nbsp;{" "}
              {Show ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
              {Show && (
                <div className="dropdown">
                  <div className="hover_green" style={{ color: "black" }}>
                    Account
                  </div>
                  <div
                    className="hover_green"
                    style={{ color: "rgb(160,160,160)" }}
                  >
                    Log out
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        <div id="sidebar">
          <div className="cross_box">
            <FontAwesomeIcon
              id="Xmark"
              onClick={() => {
                document.getElementById("sidebar").style.width = "0rem";
                document.getElementById("Xmark").style.display = "none";
              }}
              icon={faXmark}
            />
          </div>
        </div>
        <div className="main">
          <div className="left">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="right">
            <FontAwesomeIcon className="profile" icon={faCircleUser} />
            <FontAwesomeIcon
              onClick={() => {
                document.getElementById("sidebar").style.width = "25rem";
                document.getElementById("Xmark").style.display = "block";
              }}
              icon={faBars}
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
