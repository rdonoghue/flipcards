"use strict";

const card = document.querySelector(".card");
const trumpSelector = document.querySelectorAll(".trump-selector");
var buttonDiv = document.getElementById("buttonList");

import { cardDetails } from "./trumpdata.js";

// buildCategories(cardDetails);
setup(cardDetails);
shuffle();

console.log("Making sure the script runs");

function buildCategories(cardList) {
  for (let k in cardList) {
    if (k.type == "parent") {
      console.log(k.cardname);
    }
    // var newDiv = document.createElement("div");
    // newDiv.id = cardCategories[k]["category"];
    // buttonDiv.appendChild(newDiv);
    // var thisDiv = document.getElementById(cardCategories[k]["category"]);
    // console.log(cardCategories[k]["category"]);
    // thisDiv.classList.add("trump-category");
    // thisDiv.classList.add("trump-button");

    // document
    //   .getElementById(cardCategories[k]["category"])
    //   .classList.add("trump-category");
    // document
    //   .getElementById(cardCategories[k]["category"])
    //   .classList.add("trump-button");

    //   var newButton = document.createElement("button");
    //   newButton.id = k;
    //   newButton.addEventListener("click", function () {
    //     console.log("It Worked!");
    //     console.log("You clicked:", this.id);
    //     console.log(cardCategories[k]); // pickcard(this.id);
    //   });
    //   newButton.innerText = cardCategories[k]["cardname"];
    //   thisDiv.appendChild(newButton);
  }
}

function setup(cardList) {
  for (let k in cardList) {
    var parentCategory = cardList[k]["parent"];
    var parentContainer = document.getElementById("buttonDiv");
    var button = document.createElement("BUTTON");
    button.id = k;
    button.innerText = cardDetails[k]["cardname"];
    parentContainer.appendChild(button);
    document.getElementById(k).classList.add("trump-selector");
    document.getElementById(k).classList.add("trump-button");

    document.getElementById(k).addEventListener("click", function () {
      console.log("You clicked:", this.id);
      pickcard(cardList[k]);
    });
  }
  document.getElementById("pickrandom").addEventListener("click", function () {
    shuffle();
  });
}

function cardpivot() {
  return Math.floor(Math.random() * 18) - 9;
}

function resetactive(activebutton) {
  for (let k in cardDetails) {
    document.getElementById(k).classList.remove("active");
  }
  document.getElementById(activebutton).classList.add("active");
}

function shuffle() {
  var buttonList = document;
  const cardarray = Object.keys(cardDetails);
  console.log(cardarray[Math.floor(Math.random() * cardarray.length)]);
  var picked = cardarray[Math.floor(Math.random() * cardarray.length)];
  pickcard(picked);
}
function pickcard(cardDict) {
  document.getElementById("cardname").textContent = cardDict.cardname;
  document.getElementById("trumpImage").src = cardDict.url;
  document.getElementById("frontCard").style.transform = "".concat(
    "rotate(" + cardpivot() + "deg)"
  );
  document.getElementById("char-blurb").innerHTML = cardDict.tagline;
  document.getElementById("char-desc").innerHTML = cardDict.blurb;
  console.log(cardDict.id);
  resetactive(cardDict.id);
}

// function pickcardold(cardId) {
//   document.getElementById("cardname").textContent =
//     cardDetails[cardId]["cardname"];
//   document.getElementById("trumpImage").src = cardDetails[cardId]["url"];
//   document.getElementById("frontCard").style.transform = "".concat(
//     "rotate(" + cardpivot() + "deg)"
//   );
//   document.getElementById("char-blurb").innerHTML =
//     cardDetails[cardId]["tagline"];

//   document.getElementById("char-desc").innerHTML = cardDetails[cardId]["blurb"];
//   resetactive(cardId);
// }
