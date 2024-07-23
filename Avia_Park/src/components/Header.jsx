import React from "react";
import "../css/Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Header() {
  return (
    <section className="header-container">
      <div className="lang">
        <p className="pvc">PVC</p>
        <p className="circled">ENG</p>
      </div>
      <div className="working-time">
        <AccessTimeIcon className="clock-icon" sx={{ fontSize: 60 }} />
        <div className="work">
          <p>TODAY IS OPENED TILL 22:00</p>
          <p>WORKING HOURS</p>
        </div>
      </div>
      <div className="logo">
        <h1>AVIAPARK</h1>
      </div>
      <div className="button-container">
        <button className="button">GETTING HERE</button>
        <button className="button">
          <XIcon sx={{ fontSize: 30 }} />
        </button>
        <button className="button">
          <FacebookIcon sx={{ fontSize: 30 }} />
        </button>
        <button className="button">
          <InstagramIcon sx={{ fontSize: 30 }} />
        </button>
        <button className="button">
          <LinkedInIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </section>
  );
}

export default Header;
