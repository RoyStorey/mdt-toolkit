import React from "react";
import addFavorite from "./addFavorite";
import { dbData } from "../components/Gallery";

var cardDisplayTags = [];

function formatCard(currentCard) {
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
            <div class="tagContainer">{cardDisplayTags}</div>
          </div>
          <div class="descriptionContainer">
            <p>{currentCard["desc"]}</p>
          </div>
          <div class="breakLine"></div>
          <h2>{currentCard["title"]}</h2>
          <button id="heartButton" onClick={() => addFavorite(currentCard)}>
            <i id={currentCard["uid"]} class="fa-regular fa-heart"></i>
          </button>
        </content>
      </div>
    </div>
  );
}

export default formatCard;
