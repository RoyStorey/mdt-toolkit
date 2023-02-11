const domContainer = document.getElementById('gallery');
const root = ReactDOM.createRoot(domContainer);

let cards = [];

const cardTemplate = (
  <div class="card cardComponent">
    <img src="/images/midwest.jpg"></img>
    <h2 class="siteTitle">{card.title}</h2>
    <div class="contentContainer">
      <content>
        <div class="bottomOfContent">
          <button>Visit website</button>
          <div class="tagContainer">
            <p>#ML</p>
            <p>#AI</p>
            <p>#MIT</p>
          </div>
        </div>
        <div class="descriptionContainer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos quas aut
            corrupti
            expedita quos distinctio</p>
        </div>
        <div class="breakLine"></div>
        <h2>Something awesome</h2>
        <button id='heartButton'>
          <i id='header-favorites' class="fa-regular fa-heart"></i>
        </button>
      </content>
    </div>
  </div>
)

const gallery = (
  <div class="galBodyContainer">
    <div class="tag-pill-container">
      <span class="pill-bar">
        <a class="pill-tag">test-tag</a>
      </span>
    </div>
    <div class="galleryComponentHolder">
      {cards}
    </div>
  </div>)

root.render(gallery)