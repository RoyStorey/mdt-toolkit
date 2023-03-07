import React, { useState, useEffect } from "react";
import formatFavoritesBar from "../functions/formatFavoritesBar";
import formatFavoritedItems from "../functions/formatFavoritedItems";
import getFavoritedItemsFromBrowser from "../functions/getFavoritedItemsFromBrowser";
import favoritesBarClosed from "../functions/favoritesBarClosed";
import { exportFavorites } from "../functions/exportFavorites";
import { importFavorites } from "../functions/importFavorites";
// import { clearFavorites } from "../functions/clearFavorites";
import { onDownload } from "../functions/exportFavorites";
import newFavoritedItems from "../functions/removeFavorite";
import { favoritedItems } from "../functions/getFavoritedItemsFromBrowser";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1)
}
function FavoritesElement() {
  const forceUpdate = useForceUpdate()
  const handleClick = () => {
    localStorage.removeItem("favorites");
    window.location.reload()
  };

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
          <ul id="listOfFavoritedItems">{formatFavoritedItems(newFavoritedItems)}</ul>
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
        <button onClick={handleClick}>Clear Favorites</button>
      </div>
    </div>
  );
}

export default FavoritesElement;
