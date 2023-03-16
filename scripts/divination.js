"use strict";
// INITIAL VALUES
import { amberCards, amberCourtCards, otherCards } from "./trumpdata.js";
const omitList = [
  "unknown",
  "shadow",
  "ambercourt",
  "lasaircaite",
  "ambernobility",
  "ambercourt",
  "goldencircle",
  "shadow",
];

// const cardDetails = amberCards;
const cardDetails = Object.assign(amberCards, amberCourtCards, otherCards);
var liveDeck = shuffle(cardDetails);

const zones = ["past", "present", "future"];
var cardMeanings = {};

// FUNCTIONAL BUTTONS
var resetButton = document.getElementById("resetSpread");
// var flipButton = document.getElementById("faceup");
resetButton.addEventListener("click", function () {
  resetSpread();
});
// flipButton.addEventListener("click", function () {
//   faceup();
// });

// CORE ACTIONS

for (var z = 0; z < zones.length; z++) {
  placeCard(zones[z]);
}

// FUNCTIONS
function resetSpread() {
  liveDeck = shuffle(cardDetails);

  faceup();
  setTimeout(function () {
    facedown();
  }, 500);

  setTimeout(function () {
    for (var z = 0; z < zones.length; z++) {
      replaceCard(zones[z]);
    }
  }, 700);
}

function faceup() {
  for (var z = 0; z < zones.length; z++) {
    const flipString = "".concat("#card", zones[z]);
    const meaningString = "".concat(zones[z], "meaning");

    var cardInit = document.querySelector(flipString);
    cardInit.classList.add("is-flipped");
    document.getElementById(meaningString).textContent = "";
  }
}

function facedown() {
  for (var z = 0; z < zones.length; z++) {
    const flipString = "".concat("#card", zones[z]);
    const meaningString = "".concat(zones[z], "meaning");
    var cardInit = document.querySelector(flipString);
    cardInit.classList.remove("is-flipped");
    document.getElementById(meaningString).textContent = "";
  }
}

// How to get the value into here?  Seperate function?  Probably need to re-merge with place :P

// function initialize(space) {
//   const flipString = "".concat("#card", space);
//   const meaningString = "".concat(space, "meaning");
//   console.log(meaningString);
//   var cardInit = document.querySelector(flipString);
//   cardInit.addEventListener("click", function () {
//     cardInit.classList.toggle("is-flipped");
//     if (cardInit.classList.contains("is-flipped")) {
//       document.getElementById(meaningString).textContent = space;
//     } else {
//       document.getElementById(meaningString).textContent = "";
//     }
//   });
// }
function placeCard(space) {
  const myValue = pickNumber(liveDeck);
  const myCard = liveDeck[myValue];
  var myMeaning = cardDetails[myCard]["tagline"];
  const flipString = "".concat("#card", space);
  const meaningString = "".concat(space, "meaning");
  liveDeck = removeCard(myValue, liveDeck);
  document.getElementById(space).removeAttribute("class");
  document.getElementById(space).classList.add("cardface");
  document.getElementById(space).classList.add("cardfront");
  document.getElementById(space).classList.add(myCard);
  if (coinFlip() == 0) {
    document.getElementById(space).classList.add("invert");
    myMeaning = myMeaning + " (Inverted)";
  }
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

function replaceCard(space) {
  const myValue = pickNumber(liveDeck);
  const myCard = liveDeck[myValue];
  var myMeaning = cardDetails[myCard]["tagline"];
  const meaningString = "".concat(space, "meaning");
  liveDeck = removeCard(myValue, liveDeck);
  document.getElementById(space).removeAttribute("class");
  document.getElementById(space).classList.add("cardface");
  document.getElementById(space).classList.add("cardfront");
  document.getElementById(space).classList.add(myCard);
  document.getElementById(meaningString).textContent = "";
  if (coinFlip() == 0) {
    document.getElementById(space).classList.add("invert");
    myMeaning = myMeaning + " (Inverted)";
  }

  cardMeanings[space] = myMeaning;
}

function coinFlip() {
  return Math.floor(Math.random() * 2);
}

function shuffle(deck) {
  var cardList = Object.keys(deck);
  console.log(cardList.length);
  for (let k = 0; k < omitList.length; k++) {
    var badCard = cardList.indexOf(omitList[k]);
    cardList.splice(badCard, 1);
  }
  console.log(cardList.length);
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
