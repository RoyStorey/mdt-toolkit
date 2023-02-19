// localStorage.setItem(name, value);
// localStorage.getItem(name);
// localStorage.removeItem(name);

// localStorage.clear();


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

// this is how we set the object into storage
// localStorage.setItem(favorites,JSON.stringify(favoritesData))
// this is how we get the objects from the storage


let favoriteData = JSON.parse(localStorage.getItem(favorites))
// console.log(favoriteData)
let favoriteList = []
for (let i = 0; i < Object.keys(favoriteData).length; i++){
  var currentFavorite = favoriteData[i]
  var favoriteListTemplate = (
    <li>
    <div className="menuItem">
      <button><i className="fa-solid fa-xmark"></i></button>
      <p><a href={currentFavorite['url']}>{currentFavorite['title']}</a></p>
    </div>
    </li>
  )
  favoriteList.push(favoriteListTemplate)
}

// need to pull the data / splice the removed data from the object - re-set the local storage data with stringified object


let favorites = (
  <div className="favorites" id="favoritesBar">
    <div>
      <div className="favoritesHeader">
        <button id="favorites-close" onClick={favoritesBarClosed}>
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
      <button>Export Favorites</button>
      <button>Import Favorites</button>
      <button>Clear Favorites</button>
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
favoritesRoot.render(favorites);

