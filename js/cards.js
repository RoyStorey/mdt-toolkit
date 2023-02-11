const domContainer = document.getElementById('cards');
const root = ReactDOM.createRoot(domContainer);




const cardTemplate = (
  <card class="cardComponent">
    <img src="/images/midwest.jpg"></img>
    <h2 class="siteTitle">Something awesome</h2>
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
  </card>
)

let cards = [];

for (let i = 0; i < cards.length; i++) {
  let currentCard = cards[i];
  let uid = currentCard.uid;
  let title = currentCard.title;
  let url = currentCard.url;
  let desc = currentCard.desc;
  let img = currentCard.img;
  let tags = currentCard.tags;
}

root.render(cardTemplate)