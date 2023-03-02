import React, { useState, useEffect } from "react";
import { favoritesBarActive } from "./Favorites";
import { favoritesBarClosed } from "./Favorites";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('css/main.css');
      ${isDarkMode ? "body { background-color: black; } .dark-mode {}" : ""}
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
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
