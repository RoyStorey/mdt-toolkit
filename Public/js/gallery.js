const domContainer = document.getElementById('gallery');
const root = ReactDOM.createRoot(domContainer);

var csvFile = []
var cardDataObjects = []
var cardTitles = []

fetch('/js/website.csv')
  .then(function (response) {
    return response.text()
  })
  .then(function (csv) {
    csvFile.push(csv)
    return csvFile
  })
  .then(function (csvFile) {
    let cardDataObjects = CSVToArray(csvFile, ',')
    let cardGallery = [];
    for (let i = 0; i < cardDataObjects.length; i++) {
      let currentCard = cardDataObjects[i];

      cardTitles.push(currentCard[1])
      console.log(cardTitles)

      let formattedCard = (<div class="card cardComponent">
        <img src={currentCard[4]}></img>
        <h2 class="siteTitle">{currentCard[1]}</h2>
        <div class="contentContainer">
          <content>
            <div class="bottomOfContent">
              <a href={currentCard[2]}><button>Visit website</button></a>
              <div class="tagContainer">
                <p>{currentCard[5]}</p>
              </div>
            </div>
            <div class="descriptionContainer">
              <p>{currentCard[3]}</p>
            </div>
            <div class="breakLine"></div>
            <h2>{currentCard[1]}</h2>
            <button id='heartButton'>
              <i id='header-favorites' class="fa-regular fa-heart"></i>
            </button>
          </content>
        </div>
      </div>)
      cardGallery.push(formattedCard)
    }

    const gallery = (
      <div class="galBodyContainer">
        <div class="tag-pill-container">
          <span class="pill-bar">
            <a class="pill-tag">test-tag</a>
          </span>
        </div>
        <div class="galleryComponentHolder">
          {cardGallery}
        </div>
      </div>)


    root.render(gallery)
  })


// const cardTemplate = (
//   <div class="card cardComponent">
//     <img src={currentCard.img}></img>
//     <h2 class="siteTitle">{currentCard.title}</h2>
//     <div class="contentContainer">
//       <content>
//         <div class="bottomOfContent">
//           <a href={currentCard.url}><button>Visit website</button></a>
//           <div class="tagContainer">
//             <p>{currentCard.tags}</p>
//           </div>
//         </div>
//         <div class="descriptionContainer">
//           <p>{currentCard.desc}</p>
//         </div>
//         <div class="breakLine"></div>
//         <h2>{currentCard.title}</h2>
//         <button id='heartButton'>
//           <i id='header-favorites' class="fa-regular fa-heart"></i>
//         </button>
//       </content>
//     </div>
//   </div>
// )