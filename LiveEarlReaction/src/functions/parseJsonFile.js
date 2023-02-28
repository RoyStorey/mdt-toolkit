async function parseJsonFile(file) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    localStorage.setItem(favorites, reader.result);
    location.reload();
    document.getElementById("importFavoriteInput").innerText = reader.result;
  });
  reader.readAsText(document.querySelector("input").files[0]);
}

export default parseJsonFile;
