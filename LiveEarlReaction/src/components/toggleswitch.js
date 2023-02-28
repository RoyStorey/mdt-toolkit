// let toggleSwitch = document.getElementById('darkmodeSwitch')

// const mainCSS = document.querySelector('link[href*="/css/main.css"]')
// var darkmodeCSS = document.querySelector('link[href*="/css/darkmode.css"]')

// chatgpt godly
// Create a new <link> element
var darkmodeCSS = document.createElement("link");

// Set the attributes of the <link> element
darkmodeCSS.rel = "stylesheet";
darkmodeCSS.type = "text/css";
darkmodeCSS.href = "/css/darkmode.css";

// Add the <link> element to the <head> of the document
// localStorage.setItem('darkmode',true)
var darkModeCached = localStorage.getItem("darkmode");

if (darkModeCached === "true") {
  document.head.appendChild(darkmodeCSS);
  localStorage.setItem("darkmode", "true");
} else if (darkModeCached === "false") {
  if (document.head.childNodes.contains("darkmodeCSS")) {
    document.head.removeChild(darkmodeCSS);
  }
  localStorage.setItem("darkmode", "false");
} else {
  console.log("err");
}
function darkModeToggle() {
  if (!document.head.contains(darkmodeCSS)) {
    document.head.appendChild(darkmodeCSS);
    localStorage.setItem("darkmode", "true");
  } else {
    document.head.removeChild(darkmodeCSS);
    localStorage.setItem("darkmode", "false");
  }
}
