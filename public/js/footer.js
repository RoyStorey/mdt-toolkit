const footerElement = document.getElementById('footer');
const footerRoot = ReactDOM.createRoot(footerElement);

const footer = (
<footer>
    <p>All rights reserved 2023</p>
    <a href="/"><p>Designed by R.D. Storey and B. Freeman</p></a>
</footer>)
  
footerRoot.render(footer)