import React from "react"
import { removeFavorite } from "./removeFavorite";

function formatFavoritedItems(favoritedItems) {
  var favoriteList = []
  if (favoritedItems != null) {
    for (let i = 0; i < favoritedItems.length; i++) {
      var currentFavorite = favoritedItems[i];
      let favoriteListTemplate = (
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
      favoriteList.push(favoriteListTemplate);
    }
  } else {
    let favoriteListTemplate = <h1>No Favorited Items</h1>;
    favoriteList.push(favoriteListTemplate);
  }
  return favoriteList
}

export default formatFavoritedItems