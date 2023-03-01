import React, { useState, useEffect } from "react";
import formatCard from "../functions/formatCard";
import { getUniqueGalleryTags } from "../functions/getUniqueGalleryTags";
import formatCardTags from "../functions/formatCardTags";
import { setFavorites } from "./Favorites";

// function TestHook() {
//   const [name, setName] = useState("initValue");
// }
function Gallery() {
  var [cardTitles, setCardTitles] = useState([]);
  var [cardUniqueTags, setCardUniqueTags] = useState([]);
  var [dbData, setDbData] = useState([]);
  var [formattedTags, setFormattedTags] = useState([]);
  var [cardGallery, setCardGallery] = useState([]);
  let apiIP;

  useEffect(() => {
    fetch(`http://172.16.220.110:8000/api/Earlkits/?format=json`)
      .then(function (response) {
        return response.text();
      })
      .then(function (rawDBData) {
        let parsedDBData = JSON.parse(rawDBData);
        setDbData(parsedDBData);
        setFavorites();
      });
  }, []);
  for (let i = 0; i < dbData.length; i++) {
    var currentCard = dbData[i];

    cardTitles.push(currentCard["title"]);
    cardGallery.push(formatCard(dbData[i]));
  }

  return (
    <div class="galBodyContainer">
      <div class="tag-pill-container">
        <span class="pill-bar">{formattedTags}</span>
      </div>
      <div class="galleryComponentHolder">{cardGallery}</div>
    </div>
  );
}

export default Gallery;
// fetch("/data")
//   .then((response) => response.json())
//   .then((data) => {
//     apiIP = data.value;
//     fetch(`http://${apiIP}:8000/api/Earlkits/?format=json`)
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (rawDBData) {
//         let dbData = JSON.parse(rawDBData);
//         for (let i = 0; i < dbData.length; i++) {
//           var currentCard = dbData[i];
//           cardTitles.push(currentCard["title"]);

//           for (let i = 0; i < currentCard["tags"].split(",").length; i++) {
//             let individualTag = <p>#{currentCard["tags"].split(",")[i]}</p>;
//             cardDisplayTags.push(individualTag);
//           }

//           cardGallery.push(formatCard(currentCard));

//           //tags.
//           let cardTagArray = currentCard["tags"].split(",");
//           for (let j = 0; j < cardTagArray.length; j++) {
//             if (!cardUniqueTags.includes(cardTagArray[j])) {
//               cardUniqueTags.push(cardTagArray[j]);
//             }
//           }
//         }

//         // tags end.
//         galleryRoot.render(galleryComponent());
//         setFavorites();
//       });
//   });
