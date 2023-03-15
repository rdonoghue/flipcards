"use strict";
// INITIAL VALUES
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
const zones = ["play"];

import { amberCards, otherCards } from "./trumpdata.js";
const cardDetails = Object.assign(amberCards, otherCards);
var liveDeck = deckSetup(cardDetails);
var pileCard = document.getElementById("pile");
var pileSpace = document.getElementById("piledeck");
var underCards = document.getElementsByClassName("backdeck");

// FUNCTIONAL BUTTONS
var resetButton = document.getElementById("resetdeck");
resetButton.addEventListener("click", function () {
  resetDeck();
});

// CORE ACTIONS

placeFirstCard();

// FUNCTIONS
function placeFirstCard() {
  var cardInit = document.getElementById("carddeck");
  cardInit.addEventListener("click", function () {
    revealCard();
  });
}

function revealCard(space = "deck") {
  var cardInit = document.getElementById("carddeck");
  cardInit.classList.add("frozen");
  console.log(cardInit);
  var myCard = liveDeck.pop();
  var cardsLeft = liveDeck.length;
  if (cardsLeft == 0) {
    underCards.classList.add("hidden");
  }
  console.log(liveDeck.length + " cards left");
  var myDeck = document.getElementById(space);
  console.log("You clicked it!");
  myDeck.classList = "cardface cardfront";
  myDeck.classList.add(myCard);
  var cardInit = document.getElementById("carddeck");
  cardInit.classList.toggle("is-flipped");

  setTimeout(function () {
    pileSpace.classList.remove("hidden");
    pileCard.classList = "cardface";
    pileCard.classList.add(myCard);
  }, 400);
  setTimeout(function () {
    cardInit.classList.add("hidden");
    cardInit.classList.toggle("is-flipped");
  }, 500);
  setTimeout(function () {
    if (cardsLeft > 0) {
      cardInit.classList.remove("hidden");
      cardInit.classList.remove("frozen");
    }
  }, 1000);
}

function resetDeck() {
  liveDeck = deckSetup(cardDetails);
  var cardInit = document.getElementById("carddeck");
  cardInit.classList.remove("hidden");
  cardInit.classList.remove("frozen");
  for (let k = 0; k < underCards.length; k++) {
    underCards[k].classList.remove("hidden");
  }
  pileSpace.classList.toggle("is-flopped");

  document.getElementById("backdeck2").classList.add("pivot-r");
  document.getElementById("backdeck3").classList.add("pivot-l");
  setTimeout(function () {
    document.getElementById("backdeck2").classList.remove("pivot-r");
    document.getElementById("backdeck2").classList.add("pivot-l");
    document.getElementById("backdeck3").classList.remove("pivot-l");
    document.getElementById("backdeck3").classList.add("pivot-r");
  }, 250);

  setTimeout(function () {
    document.getElementById("backdeck2").classList.remove("pivot-l");
    document.getElementById("backdeck3").classList.remove("pivot-r");
    pileSpace.classList.toggle("is-flopped");
    pileSpace.classList.add("hidden");
  }, 500);
}

function deckSetup(deck) {
  var cardList = Object.keys(deck);
  console.log(cardList.length);
  for (let k = 0; k < omitList.length; k++) {
    var badCard = cardList.indexOf(omitList[k]);
    cardList.splice(badCard, 1);
  }
  console.log(cardList.length);
  for (var k in omitList) {
    var badCard = cardList.indexOf(omitList[k]);
    cardList.splice(badCard, 1);
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

function pickNumber(deck) {
  const drawNum = Math.floor(Math.random() * deck.length);
  return drawNum;
}
