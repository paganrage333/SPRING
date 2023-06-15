const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let numCardsClicked = 0;
let firstCard = null;
let secondCard = null;
let numPairsFound = 0;

// TODO: Implement this function!

function handleCardClick(event) {
  const clickedCard = event.target;

  if (numCardsClicked === 0) {
    // First card clicked
    clickedCard.classList.add("flipped");
    const assignedColor = clickedCard.classList[0];
    clickedCard.style.backgroundColor = assignedColor;
    numCardsClicked = 1;
    firstCard = clickedCard;
  } else if (numCardsClicked === 1 && clickedCard !== firstCard) {
    // Second card clicked
    clickedCard.classList.add("flipped");
    const assignedColor = clickedCard.classList[0];
    clickedCard.style.backgroundColor = assignedColor;
    numCardsClicked = 2;
    secondCard = clickedCard;

    // Check if the two cards match
    if (firstCard.classList[0] === secondCard.classList[0]) {
      // Match! 
      numPairsFound++;
      if (numPairsFound === COLORS.length / 2) {
        //All pairs found!
        displayCongratulations();
      }

      //Reset the variables
      numCardsClicked = 0;
      firstCard = null;
      secondCard = null;
    } else {
      // No match. Reset the cards after a delay
      setTimeout(function () {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard.style.backgroundColor = "white";
        secondCard.style.backgroundColor = "white";
        numCardsClicked = 0;
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
}

function displayCongratulations() {
  const congratsMsg = document.createElement('section');
  congratsMsg.textContent = 'Congratulations! You found all the pairs!';
  gameContainer.appendChild(congratsMsg);
}

// when the DOM loads
createDivsForColors(shuffledColors);

// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);

//   const clickedCard = event.target;

//   //get the color assigned to clicked card
//   const assignedColor = clickedCard.classList[0];

//   //Set the background color
//   clickedCard.style.backgroundColor = assignedColor;

//   setTimeout(function () {
//     clickedCard.style.backgroundColor = "white";
//   }, 1500);
// }