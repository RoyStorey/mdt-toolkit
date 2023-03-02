import React, { useState, useEffect } from "react";
import getFavoritedItemsFromBrowser from "../functions/getFavoritedItemsFromBrowser";
// this is how we set the object into storage
var favoritedItems = getFavoritedItemsFromBrowser();
var favoriteList = [];

function formatFavoritedItems(favoritedItems) {
  if (favoritedItems != null) {
    for (let i = 0; i < favoritedItems.length; i++) {
      var currentFavorite = favoritedItems[i];
      var favoriteListTemplate = (
        <li>
          <div className="menuItem">
            <button onClick={removeFavorite}>
              <i
                id={currentFavorite["title"]}
                className="fa-solid fa-xmark"
              ></i>
            </button>
            <p>
              <a href={currentFavorite["url"]}>{currentFavorite["title"]}</a>
            </p>
          </div>
        </li>
      );
      favoriteList.push(favoriteListTemplate);
    }
  } else {
    var favoriteListTemplate = <h1>No Favorited Items</h1>;
    favoriteList.push(favoriteListTemplate);
  }
}
// populates user favorites from browser storage
// function setFavoriteListWithFavoritedItems(browserFavoriteData) {
//   formatFavoritedItems(browserFavoriteData);
// }

function formatFavoritesBar(formattedFavoritesList) {
  return (
    <div className="favorites" id="favoritesBar">
      <div>
        <div className="favoritesHeader">
          <button id="favorites-close" onClick={favoritesBarClosed}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h1>Favorites</h1>
        </div>
        <div className="favoritesMenuItemContainer">
          <ul id="listOfFavoritedItems">{favoriteList}</ul>
        </div>
      </div>
      <div className="favoritesFooter">
        <button onClick={onDownload}>Export Favorites</button>
        <button id="importFavoriteButton" onClick={importFavorites}>
          Import Favorites
          <input
            id="importFavoriteInput"
            type={"file"}
            // onChange={parseJsonFile}
          ></input>
        </button>
        <button onClick={clearFavorites}>Clear Favorites</button>
      </div>
    </div>
  );
}

function FavoritesElement() {
  formatFavoritedItems(favoritedItems);
  return formatFavoritesBar(favoriteList);
}
// addFavorite() function is inside of the for-loop on gallery.js.

export function favoritesBarActive() {
  const favoritesBar = document.getElementById("favoritesBar");
  favoritesBar.style.right = "0%";
}

export function favoritesBarClosed() {
  const favoritesBar = document.getElementById("favoritesBar");
  favoritesBar.style.right = "-25%";
}

// need to splice the selected value out of the object and then resave into browser storage
export function removeFavorite(btn) {
  btn.preventDefault();
  const selectedFavorite = btn.target.id;
  for (let i = 0; i < Object.keys(favoritedItems).length; i++) {
    if (favoritedItems[i]["title"] === selectedFavorite) {
      favoritedItems.splice(i, 1);
      localStorage.setItem("favorites", JSON.stringify(favoritedItems));
    }
  }
}

export function clearFavorites() {
  localStorage.removeItem("favorites");
}

// need to export localstorage into a downloaded json file.
export function exportFavorites(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export function onDownload() {
  exportFavorites(
    JSON.stringify(favoritedItems),
    "favorites.json",
    "text/plain"
  );
}

// import using exported json file
export function importFavorites() {
  const uploadInput = document.getElementById("importFavoriteInput");
  uploadInput.click();
}

export function setFavorites() {
  for (let i = 0; i < favoritedItems.length; i++) {
    let selectedUID = favoritedItems[i].uid;
    let element = document.getElementById(selectedUID);
    console.log("test2");
    if (element) {
      element.classList.add("fa-solid");
      console.log("test");
    }
  }
}

export default FavoritesElement;
