import React from "react";

function getFavoritedItemsFromBrowser() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export var favoritedItems = getFavoritedItemsFromBrowser()
export default getFavoritedItemsFromBrowser;
