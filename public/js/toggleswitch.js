let toggleSwitch = document.getElementById('darkmodeSwitch')
let isItDarkMode = true;
const mainCSS = document.querySelector('link[href*="/css/main.css"]')
var darkmodeCSS = document.querySelector('link[href*="/css/darkmode.css"]')

function darkModeToggle(){
    if(isItDarkMode === true){
        mainCSS.parentNode.removeChild(darkmodeCSS);
        isItDarkMode = false;
        console.log('nut')
    }
}
