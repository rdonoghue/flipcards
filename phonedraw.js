"use strict";
// INITIAL VALUES
const omitList = ["unknown", "shadow", "ambercourt", "lasaircaite"];
const zones = ["play"];
import { amberCards, otherCards } from "./trumpdata.js";
const cardDetails = Object.assign(amberCards, otherCards);
var liveDeck = deckSetup(cardDetails);
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
  var allCards = getElementsByClassName("allcards");
  
  if (cardsLeft == 0) {
    allCards.classList.add("hidden");
    
  }
  console.log(liveDeck.length + " cards left");
  var myDeck = document.getElementById(space);
  console.log("You clicked it!");
  myDeck.classList = "cardface cardfront";
  myDeck.classList.add(myCard);
  var cardInit = document.getElementById("carddeck");
  cardInit.classList.toggle("is-flipped");
  var showCard = document.getElementById("mainBack");
  var alsoShowCard = document.getElementById("decktop");

  setTimeout(function () {
    showCard.classList = "cardface cardback";
    alsoShowCard.classList = "cardface cardback";
    console.log(showCard);
    console.log(alsoShowCard);

    showCard.classList.add(myCard);
    alsoShowCard.classList.add(myCard);
  }, 250);

  setTimeout(function () {
    cardInit.classList.add("hidden");
    cardInit.classList.toggle("is-flipped");
  }, 300);

  setTimeout(function () {
    if (cardsLeft > 0) {
      cardInit.classList.remove("hidden");
      cardInit.classList.remove("frozen");
    }
  }, 700);
}

function resetDeck() {
  liveDeck = deckSetup(cardDetails);
  var cardInit = document.getElementById("carddeck");
  cardInit.classList.remove("hidden");
  cardInit.classList.remove("frozen");
  var allCards = getElementsByClassName("allcards");
allCards.classList.remove("hidden");
  for (let k = 0; k < underCards.length; k++) {
    underCards[k].classList.remove("hidden");
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
