"use strict";

const card = document.querySelector(".card");
const trumpSelector = document.querySelectorAll(".trump-selector");
var buttonDiv = document.getElementById("buttonList");
const scriptCall = document.getElementById("callcards").getAttribute("handoff");

console.log(scriptCall);

import {
  amberCards,
  amberCourtCards,
  otherCards,
  placeCards,
} from "./trumpdata.js";

var cardDetails;
var pageType;

if (scriptCall == "ambercards") {
  cardDetails = amberCards;
  pageType = "amber";
} else if (scriptCall == "ambercourt") {
  cardDetails = amberCourtCards;
  pageType = "other";
} else if (scriptCall == "othercards") {
  cardDetails = otherCards;
  pageType = "other";
} else if (scriptCall == "places") {
  cardDetails = placeCards;
  pageType = "places";
}

console.log(document.getElementById("callcards"));
// const cardDetails = amberCards;

buildCategories(cardDetails);
setup(cardDetails);
// shuffle();

console.log("Making sure the script runs");

function buildCategories(cardList) {
  for (let k in cardList) {
    if (cardList[k]["type"] == "parent") {
      var newDiv = document.createElement("div");
      newDiv.id = cardDetails[k]["category"];
      buttonDiv.appendChild(newDiv);
      var thisDiv = document.getElementById(cardDetails[k]["category"]);
      thisDiv.classList.add("trump-category");
      thisDiv.classList.add("trump-button");

      document
        .getElementById(cardDetails[k]["category"])
        .classList.add("trump-category");
      document
        .getElementById(cardDetails[k]["category"])
        .classList.add("trump-button");

      var newButton = document.createElement("button");
      newButton.id = k;
      newButton.addEventListener("click", function () {
        pickcard(this.id);
      });
      newButton.innerText = cardDetails[k]["cardname"];
      thisDiv.appendChild(newButton);
    }
  }
}

function setup(cardList) {
  for (var k in cardList) {
    if (cardDetails[k]["type"] == "child") {
      console.log(k);
      let parentContainer = document.getElementById(cardList[k]["parent"]);
      var newButton = document.createElement("button");
      newButton.id = k;
      newButton.innerText = cardDetails[k]["cardname"];

      parentContainer.appendChild(newButton);
      document.getElementById(k).classList.add("trump-selector");
      document.getElementById(k).classList.add("trump-button");

      document.getElementById(k).addEventListener("click", function () {
        pickcard(this.id);
      });
    }
  }
  document.getElementById("pickrandom").addEventListener("click", function () {
    shuffle();
  });
  document.getElementById("resetpage").addEventListener("click", function () {
    resetpage();
  });
}

function cardpivot() {
  return Math.floor(Math.random() * 12) - 6;
}

function resetactive(activebutton) {
  for (let k in cardDetails) {
    document.getElementById(k).classList.remove("active-button");
  }
  document.getElementById(activebutton).classList.add("active-button");
}

function shuffle() {
  const cardarray = Object.keys(cardDetails);
  var picked = cardarray[Math.floor(Math.random() * cardarray.length)];
  pickcard(picked);
}

function pickcard(cardId) {
  document.getElementById("cardname").textContent =
    cardDetails[cardId]["cardname"];
  document.getElementById("cardmeaning").textContent =
    cardDetails[cardId]["tagline"];
  document.getElementById("trumpImage").src = cardDetails[cardId]["url"];
  document.getElementById("frontCard").style.transform = "".concat(
    "rotate(" + cardpivot() + "deg)"
  );
  document.getElementById("char-oneline").innerHTML =
    cardDetails[cardId]["oneline"];

  document.getElementById("char-blurb").innerHTML =
    cardDetails[cardId]["cardname"];

  document.getElementById("char-desc").innerHTML =
    cardDetails[cardId]["details"];

  document.getElementById("frontCard").classList.add("cardFace");
  document.getElementById("frontCard").classList.remove("cardReverse");

  resetactive(cardId);
}

function resetpage() {
  document.getElementById("cardname").textContent = " ";
  document.getElementById("trumpImage").src = "/img/royalback-full.png";
  document.getElementById("frontCard").style.transform = "".concat(
    "rotate(" + cardpivot() + "deg)"
  );
  document.getElementById("cardmeaning").innerHTML = "<p> </p>";

  document.getElementById("char-blurb").innerHTML = "Prosperity";
  document.getElementById("char-desc").innerHTML =
    "<p>Welcome to the Prosperity Court</p>";

  for (let k in cardDetails) {
    document.getElementById(k).classList.remove("active-button");
  }
}
