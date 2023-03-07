import React, { useState } from "react"
import { favoritedItems as FavoritedItems } from "./getFavoritedItemsFromBrowser";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1)
}
function removeFavorite(btn) {
  btn.preventDefault();
  const selectedFavorite = btn.target.id;
  for (let i = 0; i < Object.keys(FavoritedItems).length; i++) {
    if (FavoritedItems[i]["title"] === selectedFavorite) {
      FavoritedItems.splice(i, 1);
      localStorage.setItem("favorites", JSON.stringify(FavoritedItems));
    }
  }
}

function formatFavoritedItems(favoritedItems) {
  const forceUpdate = useForceUpdate()
  const handleClick = () => {
    forceUpdate();
  };

  var formattedFavoriteList = []
  if (favoritedItems != null) {
    for (let i = 0; i < favoritedItems.length; i++) {
      var currentFavorite = favoritedItems[i];
      let formattedFavoriteListTemplate = (
        <li>
          <div className="menuItem">
            <button id='favoritexbutton' onClick={removeFavorite}>
              <i
                id={currentFavorite["title"]}
                className="fa-solid fa-xmark"
                onClick={handleClick}
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