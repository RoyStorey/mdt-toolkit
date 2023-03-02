import React from "react";
import Header from "./components/Header.js";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer.js";
import FavoritesElement from "./components/Favorites";
import "./App.css";
import "./css/darkmode.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <FavoritesElement />
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
