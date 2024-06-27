import React from "react";
import "./header.css";
import Logo from "../../assets/Desi-in-UAE-Logo.png";
// import { FaHome } from "react-icons/fa"
// import { FcAbout } from "react-icons/fc"
import { NavLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";

function header() {
  let active = {
    color: "green",
  };
  return (
    <div className="Header-main">
      <div className="Header">
        <div className="Navigation">
          <div className="Logo-img">
            <NavLink to="/">
              <img src={Logo} alt="Logo-Img" />
            </NavLink>
          </div>

          <div className="Menu">
            <div className="nav-links">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => (isActive ? active : undefined)}
              >
                <p>Home</p>
                <HomeIcon className="homeIcon" />
              </NavLink>

              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => (isActive ? active : undefined)}
              >
                <p>About</p>
                <InfoIcon className="homeIcon" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
