import React, { useState, useEffect } from "react";
import formatFavoritesBar from "../functions/formatFavoritesBar";
import formatFavoritedItems from "../functions/formatFavoritedItems";
import getFavoritedItemsFromBrowser from "../functions/getFavoritedItemsFromBrowser";
export var favoritedItems = getFavoritedItemsFromBrowser()

console.log(favoritedItems)

function FavoritesElement() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      setData(getFavoritedItemsFromBrowser());
    }
    fetchData();
    console.log(data)
  }, []);

  return formatFavoritesBar(formatFavoritedItems(favoritedItems));
}

export default FavoritesElement;
