"use strict";

const card = document.querySelector(".card");
const bevinbutton = document.querySelector(".bevin-button");
const opheliabutton = document.querySelector(".ophelia-button");

console.log("Making sure the script runs");
// console.log(document.getElementsByClassName("cardcaptiontext")[0]);
// console.log(document.getElementById("cardname"));
// console.log(document.getElementById("cardname").textContent);
console.log(document.getElementById("frontCard").style.transform);

bevinbutton.addEventListener("click", function () {
  console.log("Clicked the Bevin Button.");
  document.getElementById("cardname").textContent = "Bevin";
  document.getElementById("trumpImage").src = "/img/bevin.png";

  document.getElementById("frontCard").style.transform = "rotate(9deg)";
});

opheliabutton.addEventListener("click", function () {
  console.log("Clicked the Ophelia Button.");
  document.getElementById("cardname").textContent = "Ophelia";
  document.getElementById("trumpImage").src = "/img/ophelia.png";
  document.getElementById("frontCard").style.transform = "rotate(-6deg)";
});
