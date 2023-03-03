import React from "react";

function setFavoritesState(stinky) {
  const [favoritedItems, setFavoritedItems] = useState([getFavoritedItemsFromBrowser]);
  setFavoritedItems(stinky)
  return favoritedItems
}

export default setFavoritesState