import React from "react";
import favoritesBarClosed from "./favoritesBarClosed";
import { onDownload } from "./exportFavorites";
import { importFavorites } from "./importFavorites";
import { clearFavorites } from "./clearFavorites";

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
          <ul id="listOfFavoritedItems">{formattedFavoritesList}</ul>
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

export default formatFavoritesBar;