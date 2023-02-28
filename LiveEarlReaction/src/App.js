import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer.js";

import "./App.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to win.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
