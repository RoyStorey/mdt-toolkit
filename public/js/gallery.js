const galleryElement = document.getElementById("gallery");
const galleryRoot = ReactDOM.createRoot(galleryElement);
var cardTitles = [];
var cardUniqueTags = [];
var favoritedItems = JSON.parse(localStorage.getItem("favorites")) || [];
let apiIP;

function checkIfFavorited() {
  console.log(favoritedItems);
}
fetch('/data')
.then((response) => response.json())
.then((data) => {
  apiIP = data.value;
fetch(`http://${apiIP}:8000/api/Earlkits/?format=json`)
  .then(function (response) {
    return response.text();
  })
  .then(function (rawDBData) {
    let parsedDBData = JSON.parse(rawDBData);
    let cardGallery = [];
    for (let i = 0; i < parsedDBData.length; i++) {
      var currentCard = parsedDBData[i];
      cardTitles.push(currentCard["title"]);

      let cardDisplayTags = [];

      for (let i = 0; i < currentCard["tags"].split(",").length; i++) {
        let individualTag = <p>#{currentCard["tags"].split(",")[i]}</p>;
        cardDisplayTags.push(individualTag);
      }

      function addFavorite(curCard) {
        document.getElementById(curCard["uid"]).classList.toggle("fa-solid");
        if (!favoritedItems.some((item) => item.title === curCard.title)) {
          favoritedItems.push(curCard);
          localStorage.setItem("favorites", JSON.stringify(favoritedItems));
          console.log(favoritedItems);
        }
      }

      let formattedCard = (
        <div class="card cardComponent">
          <div class="gradient"></div>
          <img src={currentCard["img"]}></img>
          <h2 class="siteTitle">{currentCard["title"]}</h2>
          <div class="contentContainer">
            <content>
              <div class="bottomOfContent">
                <a href={currentCard["url"]}>
                  <button>Visit website</button>
                </a>
                <div class="tagContainer">{cardDisplayTags}</div>
              </div>
              <div class="descriptionContainer">
                <p>{currentCard["desc"]}</p>
              </div>
              <div class="breakLine"></div>
              <h2>{currentCard["title"]}</h2>
              <button
                id="heartButton"
                onClick={() => addFavorite(parsedDBData[i])}
              >
                <i id={i} class="fa-regular fa-heart"></i>
              </button>
            </content>
          </div>
        </div>
      );
      cardGallery.push(formattedCard);

      //tags.
      let cardTagArray = currentCard["tags"].split(",");
      for (let j = 0; j < cardTagArray.length; j++) {
        if (!cardUniqueTags.includes(cardTagArray[j])) {
          cardUniqueTags.push(cardTagArray[j]);
        }
      }
    }

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
    setFavorites();
  });});
