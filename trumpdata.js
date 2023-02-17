"use strict";

const cardDetails = {};

// Categories

cardDetails["oberon"] = {
  type: "parent",
  category: "oberon-category",
  cardname: "Oberon",
  url: "./img/oberon.png",
  tagline: "King",
  blurb: "King of Amber. Manly man.",
};

cardDetails["velka"] = {
  type: "parent",

  category: "velka-category",
  cardname: "Velka",
  url: "./img/velka.png",
  tagline: "Memory",
  blurb: "",
};

cardDetails["fina"] = {
  type: "parent",

  category: "fina-category",
  cardname: "Fina",
  url: "./img/fina.png",
  tagline: "Dreams",
  blurb: "",
};

cardDetails["milesia"] = {
  type: "parent",

  category: "milesia-category",
  cardname: "Milesia",
  url: "./img/milesia.png",
  tagline: "Chaos",
  blurb: "",
};

cardDetails["eirashaol"] = {
  type: "parent",

  category: "eirashaol-category",
  cardname: "Eira Shaol",
  url: "./img/eirashaol.png",
  tagline: "Queen",
  blurb: "",
};
cardDetails["unknown"] = {
  type: "parent",

  category: "unknown-category",
  cardname: "Unknown",
  url: "./img/unknown-web.png",
  tagline: "Illegitimate",
  blurb: "Oberon's byblows.",
};

cardDetails["dworkin"] = {
  type: "parent",

  category: "dworkin-category",
  cardname: "Dworkin",
  url: "./img/dworkin.png",
  tagline: "Enigma",
  blurb: "",
};
cardDetails["lasaircaite"] = {
  type: "parent",
  category: "lasaircaite-category",
  cardname: "The Laisir Caite",
  url: "./img/lasaircaite.png",
  tagline: "The Lasair Caite",
  blurb: "People of Chaos",
};

// Velka

cardDetails["anderon"] = {
  cardname: "Anderon",
  type: "child",
  url: "../img/anderon.png",
  parent: "velka-category",
  tagline: "Fallen",
  blurb: "",
};
cardDetails["lorec"] = {
  cardname: "Lorec",
  type: "child",
  url: "../img/lorec.png",
  parent: "velka-category",
  tagline: "War",
  blurb: "",
};
cardDetails["aurielle"] = {
  cardname: "Aurielle",
  type: "child",
  url: "../img/aurielle.png",
  parent: "velka-category",
  tagline: "Hunt",
  blurb: "",
};

// Fina
cardDetails["suillir"] = {
  cardname: "Suil Lir",
  type: "child",
  url: "../img/suillir.png",
  parent: "fina-category",
  tagline: "Master of Hounds",
  blurb: "",
};

cardDetails["fenella"] = {
  cardname: "Fenella",
  type: "child",
  url: "../img/fenella.png",
  parent: "fina-category",
  tagline: "Artist",
  blurb: "<p>Placeholder</p>",
};

cardDetails["roichard"] = {
  cardname: "Roichard",
  type: "child",
  url: "../img/roichard.png",
  parent: "fina-category",
  tagline: "Maker",
  blurb: "<p>Placeholder</p>",
};

cardDetails["cethlenn"] = {
  cardname: "Cethlenn",
  type: "child",
  url: "../img/cethlenn.png",
  parent: "fina-category",
  tagline: "Reflection",
  blurb: "<p>Placeholder</p>",
};

// Milesia
cardDetails["ophelia"] = {
  type: "child",
  cardname: "Ophelia",
  url: "../img/ophelia.png",
  parent: "milesia-category",
  tagline: "Inferno",
  blurb: "",
  description: "<h2>Inferno</h2>",
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

cardDetails["borel"] = {
  cardname: "Borel",
  type: "child",
  url: "../img/borel.png",
  parent: "milesia-category",
  tagline: "Master of the Abyss",
  blurb:
    "<p>Third child and first son of Oberon and Ophelia, Borel spends most of his time in what he describes as 'his studies' but which others refer to as 'plugging holes in the universe'.  He is one of the more sorcerously knowledgeable members of the family, but consistently defers to his hister on such matters. </a>.",
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

cardDetails["alaric"] = {
  cardname: "Alaric",
  type: "child",
  url: "../img/alaric.png",
  parent: "milesia-category",
  tagline: "Revelry",
  blurb: "<p>Placeholder</p>",
};

// Eira Shaol

cardDetails["pauol"] = {
  cardname: "Paoul",
  type: "child",
  url: "../img/pauol.png",
  parent: "eirashaol-category",
  tagline: "Crown Prince",
  blurb: "<p>Well, <b>somebody</b> has to be the heir.</p>",
};

cardDetails["liabelle"] = {
  cardname: "Liabelle",
  type: "child",
  url: "../img/liabelle.png",
  parent: "eirashaol-category",
  tagline: "Resolver",
  blurb:
    "<p>Liabelle is never not at war, it is only the means which change</p>",
};

cardDetails["diolinda"] = {
  cardname: "Diolinda",
  type: "child",
  url: "../img/diolinda.png",
  parent: "eirashaol-category",
  tagline: "Confidante",
  blurb:
    "<p>Diolinda is many things.  Youngest child of Oberon and Eira Shaol. Patron of the arts.  Shadow Earth enthusiast.  Oberon's favorite.  She is, indeed many things, but you can rest assured that none of those things is 'spy'.</p>",
};

// Chaos

// Other
cardDetails["bastard"] = {
  cardname: "The Bastard",
  type: "child",
  url: "../img/bastard.png",
  parent: "unknown-category",
  tagline: "Forgotten",
  blurb: "",
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

export { cardDetails };
