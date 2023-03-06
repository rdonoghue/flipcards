"use strict";
// INITIAL VALUES
const omitList = ["unknown", "shadow", "ambercourt", "lasaircaite"];
import { amberCards, amberCourtCards, otherCards } from "./trumpdata.js";
var allCards = Object.assign(amberCards, amberCourtCards, otherCards);
var cardIndex = deckSetup(allCards);
var cardsInDeck = document.getElementsByClassName("indeck");
const deckOutline = document.querySelector(".deckspace");
var resetButton = document.getElementById("resetdeck");
const overlayElement = document.querySelector(".helpoverlay");
const helpElement = document.querySelector(".helpdetails");
const helpButton = document.getElementById("gethelp");
const pageHeader = document.querySelector("header");

var activeCard;
// FUNCTIONAL BUTTONS
overlayElement.addEventListener("click", toggleHelp);
resetButton.addEventListener("click", resetDeck);
helpButton.addEventListener("click", toggleHelp);
document.addEventListener("keypress", getKeyboardInput);

// CORE ACTIONS
createDeck();

var moveCard = document.getElementsByClassName("card");
for (let k = 0; k < moveCard.length; k++) {
  dragElement(moveCard[k]);
}

// FUNCTIONS

function toggleHelp() {
  overlayElement.classList.toggle("hidden");
  helpElement.classList.toggle("hidden");
}

function getKeyboardInput(event) {
  activeCard.style.transition = "0.5s ease";
  let cardRotationValue;
  let cardRotation = activeCard.style.transform;

  if (!cardRotation) {
    cardRotation = "rotate(0deg)";
    cardRotationValue = 0;
  } else {
    cardRotationValue = Number(cardRotation.slice(7, cardRotation.length - 4));
  }

  if (event.key == "s") {
    cardRotation = "rotate(180deg)";
    cardRotationValue = 180;
  } else if (event.key == "w") {
    cardRotation = "rotate(0deg)";
    cardRotationValue = 0;
    activeCard.style.transform = "rotate(0deg)";
  } else if (event.key == "d") {
    cardRotation = "rotate(90deg)";
    cardRotationValue = 90;
  } else if (event.key == "a") {
    cardRotationValue = -90;
  } else if (event.key == "e") {
    cardRotationValue += 15;
  } else if (event.key == "q") {
    cardRotationValue -= 15;
  } else if (event.key == "x") {
    resetDeck();
  } else if (event.key == "h") {
    for (let cardToHide of cardsInDeck) {
      cardToHide.style.visibility = "hidden";
    }
    deckOutline.style.visibility = "hidden";
    resetButton.style.visibility = "hidden";
    helpButton.style.visibility = "hidden";
    pageHeader.style.visibility = "hidden";
  } else if (event.key == "u") {
    for (let cardToHide of cardsInDeck) {
      cardToHide.style.visibility = "visible";
    }
    deckOutline.style.visibility = "visible";
    resetButton.style.visibility = "visible";
    helpButton.style.visibility = "visible";
    pageHeader.style.visibility = "visible";
  } else if (event.key == "r") {
    activeCard.style.top = 0;
    activeCard.style.left = 0;
    cardRotationValue = 0;
    activeCard.classList.add("indeck");
    activeCard.parentNode.prepend(activeCard);
  } else if (event.key == "b") {
    activeCard.parentNode.prepend(activeCard);
  } else if (event.key == "?") {
    console.log("show help overlay");
    console.log(overlayElement.classList);
    toggleHelp();
  }
  // else if (event.key == "1") {
  //   console.log("Active Card: " + activeCard.id);
  //   console.log(cardsInDeck.length);
  // }

  cardRotation = "rotate(" + cardRotationValue + "deg)";
  activeCard.style.transform = cardRotation;
  // console.log(cardRotation);

  setTimeout(function () {
    activeCard.style.transition = "none";
  }, 500);

  activeCard = activeCard.parentNode.lastChild;
}

function dragElement(elmnt) {
  // console.log(elmnt.id);

  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    elmnt.parentNode.appendChild(elmnt);
    elmnt.style.transition = "none";

    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.transition = "0.5s ease";
    elmnt.classList.remove("indeck");
    cardsInDeck = document.getElementsByClassName("indeck");

    // console.log(elmnt.id);
    activeCard = elmnt;
    // console.log(activeCard.id);
    // console.log(activeCard);
  }
}

function createDeck() {
  var location = document.getElementById("playspace");
  for (let k in cardIndex) {
    let myKey = cardIndex[k];
    let cardID = cardIndex[k];
    allCards[myKey]["angle"] = 0;
    let myCard = document.createElement("div");
    myCard.setAttribute("id", cardIndex[k]);
    myCard.setAttribute("class", "card");
    myCard.innerHTML = "<div class='cardface " + cardID + "'></div>";
    myCard.classList.add("indeck");
    location.appendChild(myCard);
    activeCard = myCard;
  }
}

function deckSetup(deck) {
  let cardList = Object.keys(deck);
  for (let k in deck) {
    deck[k]["angle"] = 0;
  }
  for (let k in omitList) {
    let badCardNum = cardList.indexOf(omitList[k]);
    let badCardName = omitList[k];
    delete allCards[badCardName];
    cardList.splice(badCardNum, 1);
  }

  cardList = shuffleArray(cardList);

  return cardList;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
// function placeFirstCard() {
//   var cardInit = document.getElementById("carddeck");
//   cardInit.addEventListener("click", function () {
//     revealCard();
//   });
// }

// function revealCard() {
//   var cardsLeft = cardIndex.length;

//   var myCard = cardIndex.pop();
//   cardContainer.classList.add("frozen");
//   console.log(cardIndex.length + " cards left");
//   console.log("You clicked it! " + cardFront.classList);
//   cardFront.setAttribute("class", "cardface cardfront");
//   cardFront.classList.add(myCard);
//   cardContainer.classList.toggle("is-flipped");

//   setTimeout(function () {
//     cardBack.setAttribute("class", "cardface cardback");
//     underCard.setAttribute("class", "cardface cardback");
//     if (cardsLeft > 0) {
//       cardBack.classList.add(myCard);
//       underCard.classList.add(myCard);
//     } else {
//       cardBack.classList.add("royalback");
//       underCard.classList.add("hidden");
//     }
//   }, 250);
//   setTimeout(function () {
//     cardContainer.classList.add("hidden");

//     cardContainer.classList.toggle("is-flipped");
//   }, 251);
//   console.log("Remaining Deck: " + cardIndex);
//   if (cardsLeft > 0) {
//     setTimeout(function () {
//       cardContainer.classList.remove("hidden");
//       cardContainer.classList.remove("frozen");
//     }, 600);
//   } else {
//     cardFront.classList = "cardface cardfront royalback";
//     setTimeout(function () {
//       cardContainer.classList.remove("frozen");
//       backDeck.classList.add("hidden");
//     }, 500);
//   }
//   console.log(underCard.classList);
// }

function resetDeck() {
  location.reload();
  // cardIndex = deckSetup(allCards);

  // cardBack.classList = "cardface cardback royalback vibrate";
  // underCard.classList = "cardface cardback royalback";
  // cardFront.classList = "cardface cardfront";
  // cardContainer.classList = "card allcards";
  // backDeck.classList = "fauxcard backdeck l1 allcards";
  // setTimeout(function () {
  //   cardBack.classList = "cardface cardback royalback";
  // }, 400);
}
