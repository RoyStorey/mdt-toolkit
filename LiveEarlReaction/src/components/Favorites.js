import React, { useState, useEffect } from "react";
import formatFavoritesBar from "../functions/formatFavoritesBar";
import formatFavoritedItems from "../functions/formatFavoritedItems";
import getFavoritedItemsFromBrowser from "../functions/getFavoritedItemsFromBrowser";
export var favoritedItems = getFavoritedItemsFromBrowser()

function FavoritesElement() {
  return formatFavoritesBar(formatFavoritedItems(favoritedItems));
}

export default FavoritesElement;
