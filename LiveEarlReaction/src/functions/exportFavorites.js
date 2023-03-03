import { favoritedItems } from "../components/Favorites";

export function exportFavorites(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export function onDownload() {
  exportFavorites(
    JSON.stringify(favoritedItems),
    "favorites.json",
    "text/plain"
  );
}
