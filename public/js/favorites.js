
// storey's job is to get the data to this 
// let favoritesData = {
//   0:{
//     title:'bing',
//     url:'chilling'
//   },
//   1:{
//     title:'google',
//     url:'https://google.com'
//   }
// }
// localStorage.setItem(favorites,JSON.stringify(favoritesData))


// this is how we set the object into storage
let favoriteList = []
// populates user favorites from browser storage
if (!localStorage.getItem(favorites) || Object.keys(localStorage.getItem(favorites)).length === 2){
  var favoriteListTemplate = (
    <h1>No Favorites!</h1>
  )
  favoriteList.push(favoriteListTemplate)
}
else{
var favoriteData = JSON.parse(localStorage.getItem(favorites))
for (let i = 0; i < Object.keys(favoriteData).length; i++){
  var currentFavorite = favoriteData[i]
  var favoriteListTemplate = (
    <li>
    <div className="menuItem">
      <button  onClick={removeFavorite}><i id={currentFavorite['title']} className="fa-solid fa-xmark"></i></button>
      <p><a href={currentFavorite['url']}>{currentFavorite['title']}</a></p>
    </div>
    </li>
  )
  favoriteList.push(favoriteListTemplate)
}
}


let favorites_element = (
  <div className="favorites" id="favoritesBar">
    <div>
      <div className="favoritesHeader">
        <button id="favorites-close" onClick={window.favoritesBarClosed}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h1>Favorites</h1>
      </div>
      <div className="favoritesMenuItemContainer">
        <ul>
          {favoriteList}
      </ul>
    </div>
    </div>
    <div className="favoritesFooter">
      <button onClick={onDownload}>Export Favorites</button>
      <button id="importFavoriteButton" onClick={importFavorites}>Import Favorites<input id="importFavoriteInput" type={'file'} onChange={parseJsonFile}></input></button>
      <button onClick={clearFavorites}>Clear Favorites</button>
    </div>
  </div>
);

const favoritesElement = document.getElementById('favorites');
const favoritesRoot = ReactDOM.createRoot(favoritesElement);

function favoritesBarActive() {
  const favoritesBar = document.getElementById("favoritesBar");
  favoritesBar.style.right = "0%";
}

function favoritesBarClosed() {
  const favoritesBar = document.getElementById("favoritesBar");
  favoritesBar.style.right = "-25%";
}
favoritesRoot.render(favorites_element);

// need to splice the selected value out of the object and then resave into browser storage
function removeFavorite(btn) {
  btn.preventDefault();
  const selectedFavorite = btn.target.id;

  for (let i = 0; i < Object.keys(favoriteData).length; i++) {
    if (favoriteData[i]['title'] === selectedFavorite) {
      localStorage.removeItem(favorites);

      // Check if the removed favorite is index 0 of the object
      if (i === 0) {
        const newFavoriteData = {};
        let j = 0;
        for (let key in favoriteData) {
          if (key !== '0') {
            newFavoriteData[j] = favoriteData[key];
            j++;
          }
        }
        favoriteData = newFavoriteData;
      } else {
        delete favoriteData[i];
      }

      localStorage.setItem(favorites, JSON.stringify(favoriteData));
      location.reload();
    }
  }
}

function clearFavorites(){
  localStorage.removeItem(favorites);
  location.reload();
}


// need to export localstorage into a downloaded json file.
function exportFavorites(content, fileName, contentType){
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

function onDownload(){
    exportFavorites(JSON.stringify(favoriteData), "favorites.json", "text/plain");
  }


// import using exported json file
function importFavorites(){
  const uploadInput = document.getElementById('importFavoriteInput')
  uploadInput.click()
  
}

async function parseJsonFile(file) {
  var reader = new FileReader();
  reader.addEventListener('load', function() {
    localStorage.setItem(favorites, reader.result);
    location.reload()
    document.getElementById('importFavoriteInput').innerText = reader.result;
  });
  reader.readAsText(document.querySelector('input').files[0]);

}


