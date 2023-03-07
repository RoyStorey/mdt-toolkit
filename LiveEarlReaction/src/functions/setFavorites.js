import { favoritedItems } from "./getFavoritedItemsFromBrowser";

export function setFavorites() {
  for (let i = 0; i < favoritedItems.length; i++) {
    let selectedUID = favoritedItems[i].uid;
    let element = document.getElementById(selectedUID);
    console.log("test2");
    if (element) {
      element.classList.add("fa-solid");
      console.log("test");
    }
  }
}