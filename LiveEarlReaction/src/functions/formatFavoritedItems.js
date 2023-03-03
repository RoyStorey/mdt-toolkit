import React from "react"
import { removeFavorite } from "./removeFavorite";

function formatFavoritedItems(favoritedItems) {
  var formattedFavoriteList = []
  if (favoritedItems != null) {
    for (let i = 0; i < favoritedItems.length; i++) {
      var currentFavorite = favoritedItems[i];
      let formattedFavoriteListTemplate = (
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
      )
      formattedFavoriteList.push(formattedFavoriteListTemplate);
    }
  } else {
    let formattedFavoriteListTemplate = <h1>No Favorited Items</h1>;
    formattedFavoriteList.push(formattedFavoriteListTemplate);
  }
  return formattedFavoriteList
}

export default formatFavoritedItems