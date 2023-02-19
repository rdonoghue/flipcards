"use strict";
// INITIAL VALUES
const omitList = ["unknown", "shadow", "ambercourt", "lasaircaite"];
const zones = ["play"];

import { amberCards, otherCards } from "./trumpdata.js";
const cardDetails = Object.assign(amberCards, otherCards);
var liveDeck = shuffle(cardDetails);
var cardMeanings = {};
var cardWindow = document.getElementById("cardlist");
var elementList = "";
var selectedCard = "";

const urlParams = new URLSearchParams(decodeURI(window.location.search));
selectedCard = urlParams.get("card");
console.log(selectedCard);

// FUNCTIONAL BUTTONS
var resetButton = document.getElementById("resetdeck");
var slideButton = document.getElementById("startslides");
resetButton.addEventListener("click", function () {
  resetSpread();
});
slideButton.addEventListener("click", function () {
  slideShow("play");
});

// CORE ACTIONS

for (let z = 0; z < zones.length; z++) {
  placeCard(zones[z], selectedCard);
}

for (let z = 0; z < liveDeck.length; z++) {
  console.log(liveDeck[z]);
  var newElement;
  var newURI;
  newURI = "draw1.html?card=" + liveDeck[z];
  newURI = encodeURI(newURI);
  newElement = "<p><a href='" + newURI + "'>" + liveDeck[z] + "</p>";
  elementList = elementList + newElement;
}
cardWindow.innerHTML = elementList;

faceup();

// FUNCTIONS
function slideShow(myZone) {
  console.log(myZone);
  for (let z = 0; z < liveDeck.length; z++) {
    setTimeout(function () {
      console.log(myZone + ": " + liveDeck[z]);
      placeCard(myZone, liveDeck[z]);
    }, 1000 * z);
    // placeCard(myZone, liveDeck[z]);

    // setTimeout(function () {

    //   placeCard(myZone, liveDeck[z]);
    //   faceup();
    // }, 3000);
  }
}

function placeCard(space, myselectedcard) {
  var myCard;
  var myValue;
  console.log(myselectedcard);
  if (myselectedcard == null) {
    myValue = pickNumber(liveDeck);
    myCard = liveDeck[myValue];
  } else {
    myCard = myselectedcard;
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

function faceup() {
  for (var z = 0; z < zones.length; z++) {
    const flipString = "".concat("#card", zones[z]);
    const meaningString = "".concat(zones[z], "meaning");

    var cardInit = document.querySelector(flipString);
    cardInit.classList.add("is-flipped");
    document.getElementById(meaningString).textContent = "";
  }
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
