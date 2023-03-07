import { React, useEffect, useState } from 'react'
import { favoritedItems } from "./getFavoritedItemsFromBrowser";
var newFavoritedItems = favoritedItems
export function removeFavorite(btn) {
  btn.preventDefault();
  const selectedFavorite = btn.target.id;
  for (let i = 0; i < Object.keys(favoritedItems).length; i++) {
    if (favoritedItems[i]["title"] === selectedFavorite) {
      favoritedItems.splice(i, 1);
      localStorage.setItem("favorites", JSON.stringify(favoritedItems));
      newFavoritedItems = favoritedItems
    }
  }
}
export default newFavoritedItems