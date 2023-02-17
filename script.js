"use strict";

const card = document.querySelector(".card");
const trumpSelector = document.querySelectorAll(".trump-selector");
var buttonDiv = document.getElementById("buttonList");

const cardDetails = {};
cardDetails["ophelia"] = {
  cardname: "Ophelia",
  url: "/img/ophelia.png",
  angle: -9,
  description: "<h2>Inferno</h2>",
};

cardDetails["bevin"] = {
  cardname: "Bevin",
  url: "/img/bevin.png",
  angle: 6,
  description: "<h2>Slayer of Monsters</h2>",
};
// import { cardDetails } from "./trumpdata.js";

setup(cardDetails);
shuffle();

console.log("Making sure the script runs");
console.log(cardpivot());

function setup(cardList) {
  for (let k in cardList) {
    var button = document.createElement("BUTTON");
    button.id = k;
    button.innerText = cardDetails[k]["cardname"];
    buttonDiv.appendChild(button);
    document.getElementById(k).classList.add("trump-selector");
    document.getElementById(k).addEventListener("click", function () {
      console.log("You clicked:", this.id);
      pickcard(this.id);
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
  const cardarray = Object.keys(cardDetails);
  console.log(cardarray[Math.floor(Math.random() * cardarray.length)]);
  var picked = cardarray[Math.floor(Math.random() * cardarray.length)];
  pickcard(picked);
}

function pickcard(cardId) {
  document.getElementById("cardname").textContent =
    cardDetails[cardId]["cardname"];
  document.getElementById("trumpImage").src = cardDetails[cardId]["url"];
  document.getElementById("frontCard").style.transform = "".concat(
    "rotate(" + cardpivot() + "deg)"
  );
  // document.getElementById("frontCard").style.transform = "".concat(
  //   "rotate(" + cardDetails[cardId]["angle"] + "deg)"
  // );
  document.getElementById("chardesc").innerHTML =
    cardDetails[cardId]["description"];
  resetactive(cardId);
}
