import React from "react";
import "../css/NavBar.css";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="button-container">
          <button className="button">
            <SearchIcon sx={{ fontSize: 30 }} />
          </button>
          <button className="button">Map</button>
        </div>
        <ul className="list">
          <li>SHOPS</li>
          <li>RESTAURANT</li>
          <li>ENTERTAIMENT</li>
          <li>KIDS</li>
          <li>SERVICES</li>
          <li>SPECIAL OFFERS</li>
          <li>NEWS</li>
          <li>EVENTS</li>
          <li>BLOG</li>
          <li>EMOJI</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
