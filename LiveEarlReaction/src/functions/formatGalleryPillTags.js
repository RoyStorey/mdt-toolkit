import React from "react";
import { galleryUniqueTags } from "./getCardTags";

function formatGalleryPillTags() {
  const formattedTags = [];
  for (let tag in galleryUniqueTags) {
    let formattedTag = <a class="pill-tag">#{galleryUniqueTags[tag]}</a>;
    formattedTags.push(formattedTag);
  }
  return formattedTags;
}

export default formatGalleryPillTags;
