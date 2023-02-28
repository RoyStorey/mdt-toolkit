var favoritedItems = JSON.parse(localStorage.getItem("favorites")) || [];

function addFavorite(curCard) {
  document.getElementById(curCard["uid"]).classList.toggle("fa-solid");
  if (!favoritedItems.some((item) => item.title === curCard.title)) {
    favoritedItems.push(curCard);
    localStorage.setItem("favorites", JSON.stringify(favoritedItems));
    console.log(favoritedItems);
  }
}

export default addFavorite;
