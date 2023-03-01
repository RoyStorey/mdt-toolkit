import React from "react";

export var cardUniqueTags = [];

// export function getGrossGalleryTags(currentCard) {
//   for (let i = 0; i < currentCard["tags"].split(",").length; i++) {
//     let individualTag = <p>#{currentCard["tags"].split(",")[i]}</p>;
//     cardDisplayTags.push(individualTag);
//   }
// }

export function getUniqueGalleryTags(currentCard) {
  var cardTagArray = currentCard["tags"].split(",");
  for (let j = 0; j < cardTagArray.length; j++) {
    if (!cardUniqueTags.includes(cardTagArray[j])) {
      cardUniqueTags.push(cardTagArray[j]);
    }
  }
}
