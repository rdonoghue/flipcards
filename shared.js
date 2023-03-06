"use strict";

const hamburgerButton = document.querySelector(".hamburger");
const navElement = document.getElementById("navigator");
const overlayElement = document.querySelector(".overlay");

hamburgerButton.addEventListener("click", showNav);
overlayElement.addEventListener("click", hideNav);

function showNav() {
  console.log("Clicked the burger");
  navElement.style.visibility = "visible";
  overlayElement.style.visibility = "visible";
}

function hideNav() {
  console.log("Clicked the burger");
  navElement.style.visibility = "hidden";
  overlayElement.style.visibility = "hidden";
}
