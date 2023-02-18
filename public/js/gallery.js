const galleryElement = document.getElementById("gallery");
const galleryRoot = ReactDOM.createRoot(galleryElement);
var cardDataObjects = [];
var cardTitles = [];
var cardUniqueTags = [];

fetch("http://192.168.86.28:8000/api/Earlkits/?format=json")
  .then(function (response) {
    return response.text();
  })
  .then(function (csv) {
    csv = JSON.parse(csv)
    let cardGallery = [];
    for (let i = 0; i < csv.length; i++){
    var currentCard = csv[i];
    cardTitles.push(currentCard['title']);

      let formattedCard = (
        <div className="card cardComponent">
          <div className="gradient"></div>
          <img src={currentCard['img']}></img>
          <h2 className="siteTitle">{currentCard['title']}</h2>
          <div className="contentContainer">
            <content>
              <div className="bottomOfContent">
                <a href={currentCard['url']}>
                  <button>Visit website</button>
                </a>
                <div className="tagContainer">
                  <p>{currentCard['tags']}</p>
                </div>
              </div>
              <div className="descriptionContainer">
                <p>{currentCard['desc']}</p>
              </div>
              <div className="breakLine"></div>
              <h2>{currentCard['title']}</h2>
              <button id="heartButton">
                <i id="header-favorites" className="fa-regular fa-heart"></i>
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
          cardUniqueTags.push(cardTagArray[j].trim());
        }
      }}

    let formattedTags = [];
    for (let tag in cardUniqueTags) {
      let formattedTag = <a className="pill-tag">#{cardUniqueTags[tag]}</a>;
      formattedTags.push(formattedTag);
    }

    const gallery = (
      <div className="galBodyContainer">
        <div className="tag-pill-container">
          <span className="pill-bar">{formattedTags}</span>
        </div>
        <div className="galleryComponentHolder">{cardGallery}</div>
      </div>
    );
    // tags end.

    galleryRoot.render(gallery);
  });