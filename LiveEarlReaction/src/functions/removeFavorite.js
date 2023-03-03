import { favoritedItems } from "../components/Favorites";

export function removeFavorite(btn) {
  btn.preventDefault();
  const selectedFavorite = btn.target.id;
  for (let i = 0; i < Object.keys(favoritedItems).length; i++) {
    if (favoritedItems[i]["title"] === selectedFavorite) {
      favoritedItems.splice(i, 1);
      localStorage.setItem("favorites", JSON.stringify(favoritedItems));
    }
  }
}
