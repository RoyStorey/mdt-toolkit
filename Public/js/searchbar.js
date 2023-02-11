function search() {
  let listContainer = document.getElementById('list');
  let listItems = document.getElementsByClassName('listItem');
  let input = document.getElementById('searchBar').value
  input = input.toLowerCase();
  let noResults = true;
  for (i = 0; i < listItems.length; i++) {
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
      listItems[i].style.display = "none";
      continue;
    }
    else {
      listItems[i].style.display = "flex";
      noResults = false;
    }
  }
  listContainer.style.display = noResults ? "none" : "block";
}