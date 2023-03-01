import React from "react";
import { cardUniqueTags } from "./getUniqueGalleryTags";

export var formattedTags = [];

function formatCardTags() {
  for (let tag in cardUniqueTags) {
    let formattedTag = <a class="pill-tag">#{cardUniqueTags[tag]}</a>;
    formattedTags.push(formattedTag);
  }
}

export default formatCardTags;
