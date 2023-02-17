"use strict";

const cardDetails = {};
cardDetails["oberon"] = {
  type: "parent",
  category: "oberon-category",
  cardname: "Oberon",
  url: "./img/oberon-web.png",
  tagline: "King",
  blurb: "King of Amber. Manly man.",
};

cardDetails["velka"] = {
  type: "parent",

  category: "velka-category",
  cardname: "Velka",
  url: "./img/velka-web.png",
  tagline: "Queen of Dreams",
  blurb: "",
};

cardDetails["fina"] = {
  type: "parent",

  category: "fina-category",
  cardname: "Fina",
  url: "./img/fina-web.png",
  tagline: "Queen of Mirrors",
  blurb: "",
};

cardDetails["milesia"] = {
  type: "parent",

  category: "milesia-category",
  cardname: "Milesia",
  url: "./img/milesia-web.png",
  tagline: "Queen of Chaos",
  blurb: "",
};

cardDetails["eirashaol"] = {
  type: "parent",

  category: "eirashaol-category",
  cardname: "Eira Shaol",
  url: "./img/eirashaol-web.png",
  tagline: "Queen of Rebma",
  blurb: "",
};
cardDetails["unknown"] = {
  type: "parent",

  category: "unknown-category",
  cardname: "unknown",
  url: "./img/unknown.png",
  tagline: "Illegitimate",
  blurb: "Oberon's blyblows.",
};
cardDetails["lasaircaite"] = {
  type: "parent",

  category: "lasaircaite-category",
  cardname: "The Laisir Caite",
  url: "./img/serpentback.png",
  tagline: "The Lasair Caite",
  blurb: "People of Chaos",
};

cardDetails["ophelia"] = {
  type: "child",
  cardname: "Ophelia",
  url: "../img/ophelia.png",
  parent: "milesia-category",
  tagline: "Inferno",
  blurb: "",
  description: "<h2>Inferno</h2>",
};

cardDetails["bevin"] = {
  cardname: "Bevin",
  type: "child",
  url: "../img/bevin.png",
  parent: "milesia-category",
  tagline: "Slayer of Monsters",
  blurb: "",
  description: "<h2>Slayer of Monsters</h2>",
};
cardDetails["suillir"] = {
  cardname: "Suil Lir",
  type: "child",
  url: "../img/suillir.png",
  parent: "fina-category",
  tagline: "Master of Hounds",
  blurb: "",
  description: "<h2>Master of Hounds</h2>",
};

cardDetails["diolinda"] = {
  cardname: "Diolinda",
  type: "child",
  url: "../img/diolinda.png",
  parent: "eirashaol-category",
  tagline: "Confidante",
  blurb:
    "<p>Diolinda is many things.  Youngest child of Oberon and Eira Shaol. Patron of the arts.  Shadow Earth enthusiast.  Oberon's favorite.  She is, indeed many things, but you can rest assured that none of those things is 'spy'.",
};

cardDetails["ava"] = {
  cardname: "Ava",
  type: "child",
  url: "../img/Ava.png",
  parent: "unknown-category",
  tagline: "Pirate Queen",
  blurb:
    "<p>Oberon's semi-acknowldged bastard and general black ops agent.  She has been given rulership of Minos, and most opposition to that has been quashed fairly violently.  Her relationship with her father is rocky, and her siblings are still largely an unknown.  Oberon has stated that the stars say her life will not be one of peace, and to help bear that, he has allowed her to continue to bear the pattern blade <a href='https://prosperity-amber.slab.com/posts/pattern-blades-vumfpia0'>Rekamuk</a>.",
};

cardDetails["borel"] = {
  cardname: "Borel",
  type: "child",
  url: "../img/borel-web.png",
  parent: "milesia-category",
  tagline: "Master of the Abyss",
  blurb:
    "<p>Third child and first son of Oberon and Ophelia, Borel spends most of his time in what he describes as 'his studies' but which others refer to as 'plugging holes in the universe'.  He is one of the more sorcerously knowledgeable members of the family, but consistently defers to his hister on such matters. </a>.",
};

cardDetails["ciara"] = {
  cardname: "Ciara",
  type: "child",
  url: "../img/ciara-web.png",
  parent: "milesia-category",
  tagline: "Burned Sorceress",
  blurb:
    "<p>Second daughter of Oberon and Ophelia, she has been Dworkin's student and currently serves as Amber's sorcerer in residence. She was married, for a time, to a lord of the Lasir Caite, and her children have gotten old enough to start taking an interest in Amber.</a>.</p>",
};

export { cardDetails };
