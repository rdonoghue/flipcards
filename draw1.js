"use strict";
// INITIAL VALUES
const omitList = ["unknown", "shadow", "ambercourt", "lasaircaite"];
const zones = ["play"];

import { amberCards, otherCards } from "./trumpdata.js";
const cardDetails = Object.assign(amberCards, otherCards);
var liveDeck = shuffle(cardDetails);
var resetButton = document.getElementById("resetdeck");
var cardMeanings = {};
var cardWindow = document.getElementById("cardlist");
var elementList = "";

// FUNCTIONAL BUTTONS
resetButton.addEventListener("click", function () {
  resetSpread();
});

// CORE ACTIONS

for (let z = 0; z < zones.length; z++) {
  placeCard(zones[z], "irina");
}

for (let z = 0; z < liveDeck.length; z++) {
  console.log(liveDeck[z]);
  elementList = elementList + "<p>" + liveDeck[z] + "</p>";
}

cardWindow.innerHTML = elementList;

// FUNCTIONS

function placeCard(space, selectedcard) {
  var myCard;
  var myValue;
  if (selectedcard == null) {
    myValue = pickNumber(liveDeck);
    myCard = liveDeck[myValue];
  } else {
    myCard = selectedcard;
    myValue = liveDeck.indexOf(myCard);
  }
  var myMeaning = cardDetails[myCard]["tagline"];
  const flipString = "".concat("#card", space);
  const meaningString = "".concat(space, "meaning");
  liveDeck = removeCard(myValue, liveDeck);
  document.getElementById(space).removeAttribute("class");
  document.getElementById(space).classList.add("cardface");
  document.getElementById(space).classList.add("cardfront");
  document.getElementById(space).classList.add(myCard);
  var cardInit = document.querySelector(flipString);

  cardInit.addEventListener("click", function () {
    cardInit.classList.toggle("is-flipped");
    if (cardInit.classList.contains("is-flipped")) {
      document.getElementById(meaningString).textContent = cardMeanings[space];
    } else {
      document.getElementById(meaningString).textContent = "";
    }
  });
  cardMeanings[space] = myMeaning;
}

function shuffle(deck) {
  var cardList = Object.keys(deck);
  console.log(cardList.length);
  for (let k = 0; k < omitList.length; k++) {
    var badCard = cardList.indexOf(omitList[k]);
    cardList.splice(badCard, 1);
  }
  console.log(cardList.length);
  //   for (var k in omitList) {
  //     var badCard = cardArray.indexOf(omitList[k]);
  //     cardArray.splice(badCard, 1);
  //   }
  return cardList;
}

function pickNumber(deck) {
  const drawNum = Math.floor(Math.random() * deck.length);
  return drawNum;
}

function removeCard(myCard, myDeck) {
  myDeck.splice(myCard, 1);
  return myDeck;
}

// function resetSpread() {
//   liveDeck = shuffle(cardDetails);

//   faceup();
//   setTimeout(function () {
//     facedown();
//   }, 500);

//   setTimeout(function () {
//     for (var z = 0; z < zones.length; z++) {
//       replaceCard(zones[z]);
//     }
//   }, 700);
// }

// function faceup() {
//   for (var z = 0; z < zones.length; z++) {
//     const flipString = "".concat("#card", zones[z]);
//     const meaningString = "".concat(zones[z], "meaning");

//     var cardInit = document.querySelector(flipString);
//     cardInit.classList.add("is-flipped");
//     document.getElementById(meaningString).textContent = "";
//   }
// }

// function facedown() {
//   for (var z = 0; z < zones.length; z++) {
//     const flipString = "".concat("#card", zones[z]);
//     const meaningString = "".concat(zones[z], "meaning");
//     var cardInit = document.querySelector(flipString);
//     cardInit.classList.remove("is-flipped");
//     document.getElementById(meaningString).textContent = "";
//   }
// }

// function replaceCard(space) {
//   const myValue = pickNumber(liveDeck);
//   const myCard = liveDeck[myValue];
//   var myMeaning = cardDetails[myCard]["tagline"];
//   const meaningString = "".concat(space, "meaning");
//   liveDeck = removeCard(myValue, liveDeck);
//   document.getElementById(space).removeAttribute("class");
//   document.getElementById(space).classList.add("cardface");
//   document.getElementById(space).classList.add("cardfront");
//   document.getElementById(space).classList.add(myCard);
//   document.getElementById(meaningString).textContent = "";
//   if (coinFlip() == 0) {
//     document.getElementById(space).classList.add("invert");
//     myMeaning = myMeaning + " (Inverted)";
//   }

//   cardMeanings[space] = myMeaning;
// }

// function coinFlip() {
//   return Math.floor(Math.random() * 2);
// }
