import React, { useState, useEffect } from "react";
import { favoritesBarActive } from "./Favorites";
import { favoritesBarClosed } from "./Favorites";
import "../css/darkmode/darkmode.css";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  useEffect(() => {
    if (!isDarkMode) {
      console.log("false");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      console.log("true");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;
      localStorage.setItem("darkmode", newIsDarkMode);
      return newIsDarkMode;
    });
  };

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
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
          ></input>
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
