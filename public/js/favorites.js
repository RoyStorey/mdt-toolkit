const favorites = (
  <div class="favorites" id="favoritesBar">
    <div>
      <div class="favoritesHeader">
        <button id="favorites-close" onClick={favoritesBarClosed}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h1>Favorites</h1>
      </div>
      <div class="favoritesMenuItemContainer">
        <ul>
          <li>
            <div class="menuItem">
              <button><i class="fa-solid fa-xmark"></i></button>
              <p>YouTube</p>
            </div>
          </li>
          <li>
            <div class="menuItem">
              <button><i class="fa-solid fa-xmark"></i></button>
              <p>Bing</p>
            </div>
          </li>
          <li>
            <div class="menuItem">
              <button><i class="fa-solid fa-xmark"></i></button>
              <p>ChatGPT</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="favoritesFooter">
      <button>Export Favorites</button>
      <button>Import Favorites</button>
      <button>Clear Favorites</button>
    </div>
  </div>
);

const favoritesElement = document.getElementById("favorites");
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