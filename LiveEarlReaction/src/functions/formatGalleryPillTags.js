import React from "react";
import { galleryUniqueTags } from "./getCardTags";
import toggleTagForFiltering from "./toggleTagForFiltering";
import { filterTags } from "./filterTags";

function formatGalleryPillTags() {
  const formattedTags = [];
  for (let tag in galleryUniqueTags) {
    let formattedTag = <a class="pill-tag" id={galleryUniqueTags[tag]} onClick={() => toggleTagForFiltering(galleryUniqueTags[tag])}>#{galleryUniqueTags[tag]}</a>;
    formattedTags.push(formattedTag);
  }
  return formattedTags;
}

export default formatGalleryPillTags;
