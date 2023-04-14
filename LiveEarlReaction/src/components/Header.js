import React, { useState, useEffect } from "react";
import favoritesBarActive from "../functions/favoritesBarActive";
import "../css/darkmode/darkmode.css";
import search from "../functions/Searchbar";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
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
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <header className="headerContainer">
      <div className="logoSpot">
        <h1>MDT Toolkit</h1>
        <i class="fa-solid fa-toolbox"></i>
      </div>
      <div className="searchcontainer">
        <div className="searchbar">
          <form autocomplete="off" onSubmit={handleSubmit}>
            <input
              type="search"
              id="searchBar"
              name="querybar"
              placeholder="Search"
              onKeyUp={search}
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
