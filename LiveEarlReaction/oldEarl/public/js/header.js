const headerElement = document.getElementById('header');
const headerRoot = ReactDOM.createRoot(headerElement);


const header = <header className="headerContainer">
    <div className="logoSpot">
        <h1>MDT Toolkit</h1>
    </div>
    <div className="searchcontainer">
        <div className="searchbar">
            <form autocomplete="off">
                <input type="search" id="searchBar" name="querybar" placeholder="Search"></input>
            </form>
        </div>
    </div>
    <div className="topRightIcons">
        <label className="switch" id="darkmodeSwitch">
            <input type="checkbox" onClick={darkModeToggle}></input>
            <span className="slider"></span>
        </label>
        <button id='favorites-button' onClick={favoritesBarActive} >
            <i id='header-favorites' className="fa-regular fa-heart"></i>
        </button>
    </div>
</header>

headerRoot.render(header)