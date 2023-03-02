import React from "react";
import { favoritesBarActive } from "./Favorites";
import { favoritesBarClosed } from "./Favorites";

function darkModeToggle() {
  if (!document.head.contains(darkmodeCSS)) {
    document.head.appendChild(darkmodeCSS);
    localStorage.setItem("darkmode", "true");
  } else {
    document.head.removeChild(darkmodeCSS);
    localStorage.setItem("darkmode", "false");
  }
}
var darkmodeCSS = document.createElement("link");
darkmodeCSS.rel = "stylesheet";
darkmodeCSS.type = "text/css";
darkmodeCSS.href = "../src/css/darkmode.css";
var darkModeCached = localStorage.getItem("darkmode");

if (darkModeCached === "true") {
  document.head.appendChild(darkmodeCSS);
  localStorage.setItem("darkmode", "true");
} else if (darkModeCached === "false") {
  localStorage.setItem("darkmode", "false");
} else {
  console.log("err");
}

function Header() {
  return (
    <header className="headerContainer">
      <div className="logoSpot">
        <h1>MDT Toolkit</h1>
      </div>
      <div className="searchcontainer">
        <div className="searchbar">
          <form autocomplete="off">
            <input
              type="search"
              id="searchBar"
              name="querybar"
              placeholder="Search"
            ></input>
          </form>
        </div>
      </div>
      <div className="topRightIcons">
        <label className="switch" id="darkmodeSwitch">
          <input type="checkbox" onClick={darkModeToggle}></input>
          <span className="slider"></span>
        </label>
        <button id="favorites-button" onClick={favoritesBarActive}>
          <i id="header-favorites" className="fa-regular fa-heart"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
