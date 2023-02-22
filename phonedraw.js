"use strict";
// INITIAL VALUES
const omitList = ["unknown", "shadow", "ambercourt", "lasaircaite"];
import { amberCards, otherCards } from "./trumpdata.js";
var cardObject = Object.assign(amberCards, otherCards);
var liveDeck = deckSetup(cardObject);
console.log("Clean Deck: " + liveDeck);
var cardBack = document.getElementById("mainBack");
var underCard = document.getElementById("decktop");
var cardFront = document.getElementById("mainFront");
var cardContainer = document.getElementById("carddeck");
var backDeck = document.getElementById("backdeck1");
var images = new Array();

// FUNCTIONAL BUTTONS
var resetButton = document.getElementById("resetdeck");
resetButton.addEventListener("click", function () {
  resetDeck();
});

// CORE ACTIONS

placeFirstCard();
preLoad();

// FUNCTIONS

function preLoad() {
  var myURL;
  for (var k = 0; k < liveDeck.length; k++) {
    console.log(cardObject[liveDeck[k]]["url"]);
    myURL = cardObject[liveDeck[k]]["url"];
    images[k] = new Image();
    images[k].url = myURL;
  }
}

function deckSetup(deck) {
  var cardList = Object.keys(deck);
  // console.log("bad deck length: ", cardList.length);
  // console.log("bad deck contents: " + cardList);

  for (var k in omitList) {
    // console.log("Check for: " + omitList[k]);

    var badCard = cardList.indexOf(omitList[k]);
    if (badCard > -1) {
      // console.log("Found: " + omitList[k]);

      cardList.splice(badCard, 1);
      // console.log("Card Removed!");
    }
  }
  // console.log("Good decklength: " + cardList.length);
  // console.log("Pre-shuffle: " + cardList);
  cardList = shuffleArray(cardList);
  // console.log("Post-shuffle: " + cardList);

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
function placeFirstCard() {
  var cardInit = document.getElementById("carddeck");
  cardInit.addEventListener("click", function () {
    revealCard();
  });
}

function revealCard() {
  var cardsLeft = liveDeck.length;

  var myCard = liveDeck.pop();
  cardContainer.classList.add("frozen");
  console.log(liveDeck.length + " cards left");
  console.log("You clicked it! " + cardFront.classList);
  cardFront.setAttribute("class", "cardface cardfront");
  cardFront.classList.add(myCard);
  cardContainer.classList.toggle("is-flipped");

  setTimeout(function () {
    cardBack.setAttribute("class", "cardface cardback");
    underCard.setAttribute("class", "cardface cardback");
    if (cardsLeft > 0) {
      cardBack.classList.add(myCard);
      underCard.classList.add(myCard);
    } else {
      cardBack.classList.add("royalback");
      underCard.classList.add("hidden");
    }
  }, 250);
  setTimeout(function () {
    cardContainer.classList.add("hidden");
    cardContainer.classList.toggle("is-flipped");
  }, 300);
  console.log("Remaining Deck: " + liveDeck);
  if (cardsLeft > 0) {
    setTimeout(function () {
      cardContainer.classList.remove("hidden");
      cardContainer.classList.remove("frozen");
    }, 600);
  } else {
    cardFront.classList = "cardface cardfront royalback";
    setTimeout(function () {
      cardContainer.classList.remove("frozen");
      backDeck.classList.add("hidden");
    }, 500);
  }
  console.log(underCard.classList);
}

function resetDeck() {
  liveDeck = deckSetup(cardObject);

  cardBack.classList = "cardface cardback royalback vibrate";
  underCard.classList = "cardface cardback royalback";
  cardFront.classList = "cardface cardfront";
  cardContainer.classList = "card allcards";
  backDeck.classList = "fauxcard backdeck l1 allcards";
  setTimeout(function () {
    cardBack.classList = "cardface cardback royalback";
  }, 400);
}
