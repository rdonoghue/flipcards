"use strict";

const card = document.querySelector(".card");
const trumpSelector = document.querySelectorAll(".trump-selector");
var buttonDiv = document.getElementById("buttonList");

import { cardDetails } from "./trumpdata.js";

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
      console.log(cardDetails[k]["category"]);
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
        console.log("It Worked!");
        console.log("You clicked:", this.id);
        pickcard(this.id);
        console.log(cardDetails[k]); // pickcard(this.id);
      });
      newButton.innerText = cardDetails[k]["cardname"];
      thisDiv.appendChild(newButton);
    }
  }
}

function setup(cardList) {
  for (var k in cardList) {
    if (cardDetails[k]["type"] == "child") {
      let parentContainer = document.getElementById(cardList[k]["parent"]);
      var newButton = document.createElement("button");
      newButton.id = k;
      newButton.innerText = cardDetails[k]["cardname"];

      parentContainer.appendChild(newButton);
      document.getElementById(k).classList.add("trump-selector");
      document.getElementById(k).classList.add("trump-button");

      document.getElementById(k).addEventListener("click", function () {
        console.log("You clicked:", this.id);
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

// }
// document.getElementById("pickrandom").addEventListener("click", function () {
//   shuffle();
// }

function cardpivot() {
  return Math.floor(Math.random() * 18) - 9;
}

function resetactive(activebutton) {
  for (let k in cardDetails) {
    document.getElementById(k).classList.remove("active-button");
  }
  document.getElementById(activebutton).classList.add("active-button");
}

function shuffle() {
  const cardarray = Object.keys(cardDetails);
  console.log(cardarray[Math.floor(Math.random() * cardarray.length)]);
  var picked = cardarray[Math.floor(Math.random() * cardarray.length)];
  pickcard(picked);
}

function pickcard(cardId) {
  console.log(cardId);
  document.getElementById("cardname").textContent =
    cardDetails[cardId]["cardname"];
  document.getElementById("trumpImage").src = cardDetails[cardId]["url"];
  document.getElementById("frontCard").style.transform = "".concat(
    "rotate(" + cardpivot() + "deg)"
  );
  document.getElementById("char-blurb").innerHTML =
    cardDetails[cardId]["tagline"];

  document.getElementById("char-desc").innerHTML = cardDetails[cardId]["blurb"];

  document.getElementById("frontCard").classList.add("cardFace");
  document.getElementById("frontCard").classList.remove("cardReverse");

  resetactive(cardId);
}

function resetpage() {
  console.log("reset the page!");
  document.getElementById("cardname").textContent = " ";
  document.getElementById("trumpImage").src = "/img/royalback-full.png";
  document.getElementById("frontCard").style.transform = "".concat(
    "rotate(" + cardpivot() + "deg)"
  );
  document.getElementById("char-blurb").innerHTML = "Prosperity";

  document.getElementById("char-desc").innerHTML =
    "<p>Welcome to the Prosperity Court</p>";
  document.getElementById("frontCard").classList.remove("cardFace");
  document.getElementById("frontCard").classList.add("cardReverse");
}
