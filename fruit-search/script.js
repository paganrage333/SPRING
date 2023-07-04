const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(str.toLowerCase())
  );
}

function searchHandler(e) {
  if (input.value != "") {
    let results = search(input.value);
    showSuggestions(results, input.value);
  } else {
    suggestions.innerHTML = "";
  }
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  results.slice(0, 5).forEach((fruit) => {
    let newSug = document.createElement("li");
    let sugIndex = fruit.toLowerCase().indexOf(inputVal.toLowerCase());
    newSug.innerHTML =
      fruit.slice(0, sugIndex) +
      "<strong>" +
      fruit.slice(sugIndex, sugIndex + inputVal.length) +
      "</strong>" +
      fruit.slice(sugIndex + inputVal.length);
    suggestions.appendChild(newSug);
  });
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
