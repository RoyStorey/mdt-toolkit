const domContainer = document.getElementById('cards');
const root = ReactDOM.createRoot(domContainer);




const cardTemplate = (
  <card className="cardComponent">
    <img src="/images/midwest.jpg"></img>
    <h2 className="siteTitle">Something awesome</h2>
    <div className="contentContainer">
      <content>
        <div className="bottomOfContent">
          <button>Visit website</button>
          <div className="tagContainer">
            <p>#ML</p>
            <p>#AI</p>
            <p>#MIT</p>
          </div>
        </div>
        <div className="descriptionContainer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos quas aut
            corrupti
            expedita quos distinctio</p>
        </div>
        <div className="breakLine"></div>
        <h2>Something awesome</h2>
        <button id='heartButton'>
          <i id='header-favorites' className="fa-regular fa-heart"></i>
        </button>
      </content>
    </div>
  </card>
)

let cards = [];

for (let i = 0; i < cards.length; i++) {
  let currentCard = cards[i];
  let uid = currentCard[0];
  let title = currentCard[1];
  let url = currentCard[2];
  let desc = currentCard[3];
  let img = currentCard[4];
  let tags = currentCard[5];
}

root.render(cardTemplate)