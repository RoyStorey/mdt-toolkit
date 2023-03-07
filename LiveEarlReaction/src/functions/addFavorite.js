import { favoritedItems } from "./getFavoritedItemsFromBrowser";

function addFavorite(curCard) {
  document.getElementById(curCard["uid"]).classList.toggle("fa-solid");
  if (!favoritedItems.some((item) => item.title === curCard.title)) {
    favoritedItems.push(curCard);
    localStorage.setItem("favorites", JSON.stringify(favoritedItems));
    window.location.reload()
  }
}

export default addFavorite;
