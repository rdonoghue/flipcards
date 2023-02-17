"use strict";

const amberCards = {};

// Categories

amberCards["oberon"] = {
  type: "parent",
  category: "oberon-category",
  cardname: "Oberon",
  url: "./img/oberon.png",
  tagline: "King",
  blurb: "King of Amber. Manly man.",
};

amberCards["velka"] = {
  type: "parent",

  category: "velka-category",
  cardname: "Velka",
  url: "./img/velka.png",
  tagline: "Memory",
  blurb: "",
};

amberCards["fina"] = {
  type: "parent",

  category: "fina-category",
  cardname: "Fina",
  url: "./img/fina.png",
  tagline: "Dreams",
  blurb: "",
};

amberCards["milesia"] = {
  type: "parent",

  category: "milesia-category",
  cardname: "Milesia",
  url: "./img/milesia.png",
  tagline: "Chaos",
  blurb: "",
};

amberCards["eirashaol"] = {
  type: "parent",

  category: "eirashaol-category",
  cardname: "Eira Shaol",
  url: "./img/eirashaol.png",
  tagline: "Queen",
  blurb: "",
};
amberCards["unknown"] = {
  type: "parent",

  category: "unknown-category",
  cardname: "Unknown",
  url: "./img/unknown-web.png",
  tagline: "Illegitimate",
  blurb: "Oberon's byblows.",
};

amberCards["dworkin"] = {
  type: "parent",

  category: "dworkin-category",
  cardname: "Dworkin",
  url: "./img/dworkin.png",
  tagline: "Enigma",
  blurb: "",
};

// Velka

amberCards["anderon"] = {
  cardname: "Anderon",
  type: "child",
  url: "../img/anderon.png",
  parent: "velka-category",
  tagline: "Fallen",
  blurb: "",
};
amberCards["lorec"] = {
  cardname: "Lorec",
  type: "child",
  url: "../img/lorec.png",
  parent: "velka-category",
  tagline: "War",
  blurb: "",
};
amberCards["aurielle"] = {
  cardname: "Aurielle",
  type: "child",
  url: "../img/aurielle.png",
  parent: "velka-category",
  tagline: "Hunt",
  blurb: "",
};

// Fina
amberCards["suillir"] = {
  cardname: "Suil Lir",
  type: "child",
  url: "../img/suillir.png",
  parent: "fina-category",
  tagline: "Master of Hounds",
  blurb: "",
};

amberCards["fenella"] = {
  cardname: "Fenella",
  type: "child",
  url: "../img/fenella.png",
  parent: "fina-category",
  tagline: "Artist",
  blurb: "<p>Placeholder</p>",
};

amberCards["roichard"] = {
  cardname: "Roichard",
  type: "child",
  url: "../img/roichard.png",
  parent: "fina-category",
  tagline: "Maker",
  blurb: "<p>Placeholder</p>",
};

amberCards["cethlenn"] = {
  cardname: "Cethlenn",
  type: "child",
  url: "../img/cethlenn.png",
  parent: "fina-category",
  tagline: "Reflection",
  blurb: "<p>Placeholder</p>",
};

// Milesia
amberCards["ophelia"] = {
  type: "child",
  cardname: "Ophelia",
  url: "../img/ophelia.png",
  parent: "milesia-category",
  tagline: "Inferno",
  blurb: "",
  description: "<h2>Inferno</h2>",
};

amberCards["ciara"] = {
  cardname: "Ciara",
  type: "child",
  url: "../img/ciara-web.png",
  parent: "milesia-category",
  tagline: "Burned Sorceress",
  blurb:
    "<p>Second daughter of Oberon and Ophelia, she has been Dworkin's student and currently serves as Amber's sorcerer in residence. She was married, for a time, to a lord of the Lasir Caite, and her children have gotten old enough to start taking an interest in Amber.</a>.</p>",
};

amberCards["borel"] = {
  cardname: "Borel",
  type: "child",
  url: "../img/borel.png",
  parent: "milesia-category",
  tagline: "Master of the Abyss",
  blurb:
    "<p>Third child and first son of Oberon and Ophelia, Borel spends most of his time in what he describes as 'his studies' but which others refer to as 'plugging holes in the universe'.  He is one of the more sorcerously knowledgeable members of the family, but consistently defers to his hister on such matters. </a>.",
};
amberCards["bevin"] = {
  cardname: "Bevin",
  type: "child",
  url: "../img/bevin.png",
  parent: "milesia-category",
  tagline: "Slayer of Monsters",
  blurb: "",
  description: "<h2>Slayer of Monsters</h2>",
};

amberCards["alaric"] = {
  cardname: "Alaric",
  type: "child",
  url: "../img/alaric.png",
  parent: "milesia-category",
  tagline: "Revelry",
  blurb: "<p>Placeholder</p>",
};

// Eira Shaol

amberCards["pauol"] = {
  cardname: "Paoul",
  type: "child",
  url: "../img/pauol.png",
  parent: "eirashaol-category",
  tagline: "Crown Prince",
  blurb: "<p>Well, <b>somebody</b> has to be the heir.</p>",
};

amberCards["liabelle"] = {
  cardname: "Liabelle",
  type: "child",
  url: "../img/liabelle.png",
  parent: "eirashaol-category",
  tagline: "Resolver",
  blurb:
    "<p>Liabelle is never not at war, it is only the means which change</p>",
};

amberCards["diolinda"] = {
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
amberCards["bastard"] = {
  cardname: "The Bastard",
  type: "child",
  url: "./img/bastard.png",
  parent: "unknown-category",
  tagline: "Forgotten",
  blurb: "",
};

amberCards["ava"] = {
  cardname: "Ava",
  type: "child",
  url: "../img/Ava.png",
  parent: "unknown-category",
  tagline: "Pirate Queen",
  blurb:
    "<p>Oberon's semi-acknowldged bastard and general black ops agent.  She has been given rulership of Minos, and most opposition to that has been quashed fairly violently.  Her relationship with her father is rocky, and her siblings are still largely an unknown.  Oberon has stated that the stars say her life will not be one of peace, and to help bear that, he has allowed her to continue to bear the pattern blade <a href='https://prosperity-amber.slab.com/posts/pattern-blades-vumfpia0'>Rekamuk</a>.",
};

const otherCards = {};

otherCards["ambercourt"] = {
  type: "parent",
  category: "ambercourt-category",
  cardname: "The Court of Amber",
  url: "./img/royalback-full.png",
  tagline: "",
  blurb: "The many folk of Amber",
};

otherCards["lasaircaite"] = {
  type: "parent",
  category: "lasaircaite-category",
  cardname: "The Laisir Caite",
  url: "./img/lasaircaite.png",
  tagline: "",
  blurb: "People of Chaos",
};

otherCards["shadow"] = {
  type: "parent",
  category: "shadow-category",
  cardname: "Denizens of Shadow",
  url: "./img/shadow.png",
  tagline: "",
  blurb: "",
};

// COurt

otherCards["salem"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Salem Chantris",
  url: "./img/salem.png",
  tagline: "Tradition",
  blurb:
    "<p>Salem Chantris oversees all other royal court appointments, and also serves as the head butler of the palace. Old beyond reason, some suspect that the cane is just for show. He is polite, firm, and not easily cowed. Even Fenella’s threats run off of Salem like water off a duck, and he saw her kill someone in Bloody Frank’s.</p>",
};

otherCards["desdemona"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Desdemona",
  url: "./img/desdemona.png",
  tagline: "Secrets",
  blurb:
    "<p>Desdemona claims to be a representative of the night city of Tir Na Nog’th and The Monarch Beyond, Queen Titania. The Ambassador’s presence has done little to increase what is known about the city in the sky or any potential interests from within, instead professing to speak as an oracle and to provide guidance for the royal court as an adviser when asked. Otherwise, her official position is a familiar statement: “We are not concerned with the affairs of others.</p>",
};

otherCards["rockscomb"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Rockscomb",
  url: "./img/rockscomb.png",
  tagline: "Inspiration",
  blurb: "",
};

otherCards["kahlverian"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "The Kahlverian",
  url: "./img/kahlverian.png",
  tagline: "Protection",
  blurb:
    "<p>The Kahlverian is named for an extinct clan of the Moonriders of Ghenesh and is said to have come to Amber centuries ago after a disagreement with her people. The Kahlverian has a reputation for talented bloodshed usually reserved for the royal family and left the Wardens at Oberon’s request to protect Eira Shaol upon the Queen’s marriage to Oberon. The Kahlverian is almost always at the Queen’s side.  </p>",
};

otherCards["firestone"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Angela Firestone",
  url: "./img/firestone.png",
  tagline: "Law",
  blurb:
    "<p>The IAAL operations chief, Firestone is a lawyer from Shadow Earth who has found her calling in the halls of Amber.</p>",
};

otherCards["wesley"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Kathryn Wesley",
  url: "./img/wesley.png",
  tagline: "Law",
  blurb:
    "<p>Kathryn Wesley is an accomplished hunter and the de factor leader of the  Elderhorn Lodgeof Weirmonken. Rumored to be one of the broken lines of lineage within Weirmonken, Kathryn's life has been dedicated in recent years to helping contain and ward off the Weir.</p><p>Exhausted by years of fighting an elusive and deadly opponent, in recent times Kathryn has convinced the local nobility within Weirmonken to start trying to find ways to increase trade and commerce as a beginning point of getting aid from the Golden Circle shadows for assistance in their fight.  While that effort is playing out, though, Kathryn leads the hunters of the lodge in stalking a superior opponent to try to make the lands safer for those who inhabit it.</p>",
};

// Chaos

otherCards["pyson"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Pyson Chanicut",
  url: "./img/pyson.png",
  tagline: "Adventure",
  blurb: "",
};

otherCards["mikaya"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Mikaya Chanicut",
  url: "./img/mikaya.png",
  tagline: "Potential",
  blurb: "",
};

otherCards["samson"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Samson Chanicut",
  url: "./img/samson.png",
  tagline: "Trickster",
  blurb: "",
};

export { amberCards, otherCards };
