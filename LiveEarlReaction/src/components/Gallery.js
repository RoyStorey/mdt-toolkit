import React, { useState, useEffect } from "react";
import formatCard from "../functions/formatCard";
import { getCardTags } from "../functions/getCardTags";
import { setFavorites } from "./Favorites";
import formatGalleryPillTags from "../functions/formatGalleryPillTags";

function Gallery() {
  const [cardTitles, setCardTitles] = useState([]);
  const [galleryUniqueTags, setGalleryUniqueTags] = useState([]);
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    fetch(`http://172.16.220.110:8000/api/Earlkits/?format=json`)
      .then((response) => response.json())
      .then((parsedDBData) => {
        setDbData(parsedDBData);
        setFavorites();
        setCardTitles(parsedDBData.map((card) => card.title));
        setGalleryUniqueTags(getCardTags(parsedDBData));
      })
      .catch((error) => console.error(error));
  }, []);

  const cardGallery = dbData.map((card) => formatCard(card));
  const tagGallery = formatGalleryPillTags(galleryUniqueTags);

  return (
    <div className="galBodyContainer">
      <div className="tag-pill-container">
        <span className="pill-bar">{tagGallery}</span>
      </div>
      <div className="galleryComponentHolder">{cardGallery}</div>
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
//             if (!galleryUniqueTags.includes(cardTagArray[j])) {
//               galleryUniqueTags.push(cardTagArray[j]);
//             }
//           }
//         }

//         // tags end.
//         galleryRoot.render(galleryComponent());
//         setFavorites();
//       });
//   });
