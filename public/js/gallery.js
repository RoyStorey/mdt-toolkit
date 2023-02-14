const galleryElement = document.getElementById("gallery");
const galleryRoot = ReactDOM.createRoot(galleryElement);

var csvFile = [];
var cardDataObjects = [];
var cardTitles = [];
var cardUniqueTags = [];

fetch("/js/website.csv")
  .then(function (response) {
    return response.text();
  })
  .then(function (csv) {
    csvFile.push(csv);
    return csvFile;
  })
  .then(function (csvFile) {
    // cards
    let cardDataObjects = CSVToArray(csvFile, ",");
    let cardGallery = [];
    let pills = [];
    for (let i = 0; i < cardDataObjects.length; i++) {
      let currentCard = cardDataObjects[i];

      cardTitles.push(currentCard[1]);

      let formattedCard = (
        <div class="card cardComponent">
          <div class="gradient"></div>
          <img src={currentCard[4]}></img>
          <h2 class="siteTitle">{currentCard[1]}</h2>
          <div class="contentContainer">
            <content>
              <div class="bottomOfContent">
                <a href={currentCard[2]}>
                  <button>Visit website</button>
                </a>
                <div class="tagContainer">
                  <p>{currentCard[5]}</p>
                </div>
              </div>
              <div class="descriptionContainer">
                <p>{currentCard[3]}</p>
              </div>
              <div class="breakLine"></div>
              <h2>{currentCard[1]}</h2>
              <button id="heartButton">
                <i id="header-favorites" class="fa-regular fa-heart"></i>
              </button>
            </content>
          </div>
        </div>
      );
      cardGallery.push(formattedCard);

      //tags.
      let cardTagArray = currentCard[5].split("-");
      for (let j = 0; j < cardTagArray.length; j++) {
        if (!cardUniqueTags.includes(cardTagArray[j])) {
          cardUniqueTags.push(cardTagArray[j]);
        }
      }
    }
    function getUniqueTags(cardUniqueTags) {
      for (let tag of cardUniqueTags) {
        console.log(tag);
        pills.push(tag);
        return tag;
      }
    }

    const gallery = (
      <div class="galBodyContainer">
        <div class="tag-pill-container">
          <span class="pill-bar">
            <a class="pill-tag">{getUniqueTags}</a>
          </span>
        </div>
        <div class="galleryComponentHolder">{cardGallery}</div>
      </div>
    );
    // tags end.

    galleryRoot.render(gallery);
  });
