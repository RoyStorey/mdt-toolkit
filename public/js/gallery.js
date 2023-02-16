const galleryElement = document.getElementById("gallery");
const galleryRoot = ReactDOM.createRoot(galleryElement);
var cardDataObjects = [];
var cardTitles = [];
var cardUniqueTags = [];
fetch("http://192.168.86.41:8000/api/Earlkits/?format=json")
  .then(function (response) {
    return response.text();
  })
  .then(function (csv) {
    csv = JSON.parse(csv)
    let cardGallery = [];
    for (let i = 0; i < csv.length; i++){
    var currentCard = csv[i];
    cardTitles.push(currentCard['title']);

    let cardDisplayTags = []

    for(let i = 0; i < currentCard['tags'].split(",").length; i++){
      let individualTag = <p>#{currentCard['tags'].split(",")[i]}</p>;
      cardDisplayTags.push(individualTag);
    }

      let formattedCard = (
        <div class="card cardComponent">
          <div class="gradient"></div>
          <img src={currentCard['img']}></img>
          <h2 class="siteTitle">{currentCard['title']}</h2>
          <div class="contentContainer">
            <content>
              <div class="bottomOfContent">
                <a href={currentCard['url']}>
                  <button>Visit website</button>
                </a>
                <div class="tagContainer">
                  {cardDisplayTags}
                </div>
              </div>
              <div class="descriptionContainer">
                <p>{currentCard['desc']}</p>
              </div>
              <div class="breakLine"></div>
              <h2>{currentCard['title']}</h2>
              <button id="heartButton">
                <i id="header-favorites" class="fa-regular fa-heart"></i>
              </button>
            </content>
          </div>
        </div>
      );
      cardGallery.push(formattedCard);

      //tags.
      let cardTagArray = currentCard['tags'].split(",");
      for (let j = 0; j < cardTagArray.length; j++) {
        if (!cardUniqueTags.includes(cardTagArray[j])) {
          cardUniqueTags.push(cardTagArray[j]);
        }
      }}

    let formattedTags = [];
    for (let tag in cardUniqueTags) {
      let formattedTag = <a class="pill-tag">#{cardUniqueTags[tag]}</a>;
      formattedTags.push(formattedTag);
    }

    const gallery = (
      <div class="galBodyContainer">
        <div class="tag-pill-container">
          <span class="pill-bar">{formattedTags}</span>
        </div>
        <div class="galleryComponentHolder">{cardGallery}</div>
      </div>
    );
    // tags end.

    galleryRoot.render(gallery);
  });