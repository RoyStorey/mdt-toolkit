const footerElement = document.getElementById('footer');
const footerRoot = ReactDOM.createRoot(footerElement);

const footer = (
<footer>
    <p>All rights reserved 2023</p>
    <p>Designed by R.D. Storey and B. Freeman</p>
</footer>)
  
footerRoot.render(footer)