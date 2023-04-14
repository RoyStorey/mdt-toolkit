var selectedTags = [];
var x = document.getElementsByClassName("card");

function toggleTagForFiltering(tag) {
  const tagIndex = selectedTags.indexOf(tag);
  if (tagIndex === -1) {
    // tag doesn't exist in selectedTags, so add it
    selectedTags.push(tag);
    document.getElementById(tag).style.background =
      "linear-gradient(90deg, rgb(219, 141, 69), rgb(204, 82, 66))";
  } else {
    // tag already exists in selectedTags, so remove it
    selectedTags.splice(tagIndex, 1);
    document.getElementById(tag).style.background = "";
  }
  if (selectedTags.length == 0) {
    // If no tags are selected, show all cards
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
  } else {
    // Otherwise, show cards that have at least one selected tag
    for (let i = 0; i < x.length; i++) {
      let shouldDisplay = false;
      for (let j = 0; j < selectedTags.length; j++) {
        if (x[i].innerHTML.includes("#" + selectedTags[j])) {
          shouldDisplay = true;
          break;
        }
      }
      x[i].style.display = shouldDisplay ? "flex" : "none";
    }
  }
}

export default toggleTagForFiltering;
