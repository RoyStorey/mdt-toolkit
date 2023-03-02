import React from "react";

export var galleryUniqueTags = [];

// export function getGrossGalleryTags(currentCard) {
//   for (let i = 0; i < currentCard["tags"].split(",").length; i++) {
//     let individualTag = <p>#{currentCard["tags"].split(",")[i]}</p>;
//     cardDisplayTags.push(individualTag);
//   }
// }

export function getCardTags(parsedDataFromDB) {
  for (let i = 0; i < parsedDataFromDB.length; i++) {
    let currentCard = parsedDataFromDB[i];
    var cardTagArray = currentCard["tags"].split(",");
    for (let j = 0; j < cardTagArray.length; j++) {
      if (!galleryUniqueTags.includes(cardTagArray[j])) {
        galleryUniqueTags.push(cardTagArray[j]);
      }
    }
  }
}
