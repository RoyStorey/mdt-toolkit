import React, { useState } from "react";
import addFavorite from "./addFavorite";
import { dbData } from "../components/Gallery";



function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1)
}
// const forceUpdate = useForceUpdate()
const handleClick = () => {
  // forceUpdate()
  console.log('bonko')
}

function formatCard(currentCard) {

  var cardDisplayTags = currentCard["tags"].split(",");
  var formattedCardDisplayTags = [];

  for (let tag in cardDisplayTags) {
    let formattedTag = <p>#{cardDisplayTags[tag]}</p>;
    formattedCardDisplayTags.push(formattedTag);
  }
  return (
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
            <div class="tagContainer">{formattedCardDisplayTags}</div>
          </div>
          <div class="descriptionContainer">
            <p>{currentCard["desc"]}</p>
          </div>
          <div class="breakLine"></div>
          <h2>{currentCard["title"]}</h2>
          <button id="heartButton" onClick={() => addFavorite(currentCard)}>
            <i id={currentCard["uid"]} class="fa-regular fa-heart" onClick={() => handleClick()}></i>
          </button>
        </content>
      </div>
    </div>
  );
}

export default formatCard;
