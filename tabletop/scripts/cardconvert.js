"use strict";
const fs = require("fs");
const cards = require("..data/trumpdata.js");

const cardList = cards.amberCards;

console.log(Object.keys(cardList).length);

const cardJSON = JSON.stringify(cardList);

const dataFilePath = ".";

fs.writeFileSync("cards.json", cardJSON);
