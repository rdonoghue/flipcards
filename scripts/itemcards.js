"use strict";
// INITIAL VALUES
const omitList = ["unknown", "shadow", "ambercourt", "lasaircaite"];
import { amberCards, otherCards } from "./trumpdata.js";
var allCards = Object.assign(amberCards, otherCards);
var cardIndex = deckSetup(allCards);
var cardBack = document.getElementById("mainBack");
var underCard = document.getElementById("decktop");
var cardFront = document.getElementById("mainFront");
var cardContainer = document.getElementById("carddeck");
var backDeck = document.getElementById("backdeck1");
var borelAngle = -5;
document.getElementById("borel2").style.transform =
  "rotate(" + borelAngle + "deg)";

// FUNCTIONAL BUTTONS
var resetButton = document.getElementById("resetdeck");
resetButton.addEventListener("click", function () {
  resetDeck();
});
// var leftHandle = document.getElementById("lefthandle");
// leftHandle.onmouseover = function () {
//   console.log("lefthandle initiated");
//   // console.log(leftHandle);
//   pivotLeft(leftHandle);
// };
var leftHandle = document.getElementsByClassName("lefthandle");
for (let k = 0; k < leftHandle.length; k++) {
  let currentCard = leftHandle[k];
  console.log(currentCard);
  currentCard.onmouseover = function () {
    console.log("lefthandle initiated");
    // console.log(leftHandle);
    pivotLeft(currentCard);
  };
}

// CORE ACTIONS
createDeck();

var moveCard = document.getElementsByClassName("card");
for (let k = 0; k < moveCard.length; k++) {
  dragElement(moveCard[k]);
}

console.log(allCards["oberon"]);
// FUNCTIONS

function pivotLeft(elmnt) {
  console.log("It started");
  let wrapper = elmnt.parentNode;
  let myID = wrapper.id;
  let currentAngle = allCards["myID"]["angle"];
  console.log(currentAngle);
  console.log(myID);
  console.log(wrapper);
  borelAngle += 15;
  wrapper.style.transform = "rotate(" + borelAngle + "deg)";

  // let oneOff = wrapClass.indexOf("r0");
  let nextString = "";

  // for (let k = 0; k < 361; k += 15) {
  //   let rString = "r" + k;

  //   if ((k = 0)) {
  //     nextString = "r15";
  //   } else {
  //     nextString = "r" + (k - 15);
  //   }
  //   console.log(rString);
  //   // console.log(hasClass(wrapper, rString));
  //   if (hasClass(wrapper, rString)) {
  //     wrapper.classList = "card " + nextString;
  //   }
  // }
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    elmnt.parentNode.appendChild(elmnt);

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
  }
}

function createDeck() {
  var location = document.getElementById("playspace");
  for (let k in cardIndex) {
    console.log(k);
    console.log(k, cardIndex[k]);
    let myKey = cardIndex[k];
    let cardID = cardIndex[k];
    console.log(allCards[myKey]);
    console.log(allCards[myKey]["url"]);
    allCards[myKey]["angle"] = 0;
    console.log(allCards[myKey]["angle"]);

    let myCard = document.createElement("div");
    myCard.setAttribute("id", cardIndex[k]);
    myCard.setAttribute("class", "card");
    // console.log(cardIndex[k]["url"]);
    // console.log(allCards[cardIndex[k]["url"]]);
    // myCard.innerHTML =
    //   "<div class='cardface'><img src='" >
    //   +allCards[k]["url"] + "' /></div><div class='cardback'>";

    myCard.innerHTML =
      "<div class='cardface " +
      cardID +
      "'></div><div class='lspot lefthandle'></div>";
    // <img src='./img/zhao.png' class='cardimage' />
    // /div>";
    location.appendChild(myCard);
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
    // console.log(badCardNum, badCardName);
    // console.log(allCards[badCardName]);
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
function placeFirstCard() {
  var cardInit = document.getElementById("carddeck");
  cardInit.addEventListener("click", function () {
    revealCard();
  });
}

function revealCard() {
  var cardsLeft = cardIndex.length;

  var myCard = cardIndex.pop();
  cardContainer.classList.add("frozen");
  console.log(cardIndex.length + " cards left");
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
  }, 251);
  console.log("Remaining Deck: " + cardIndex);
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