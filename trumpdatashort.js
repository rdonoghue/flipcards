"use strict";

const amberCards = {};

// Categories

amberCards["oberon"] = {
  type: "parent",
  category: "oberon-category",
  cardname: "Oberon",
  url: "./img/oberon.png",
  tagline: "The King",
  blurb:
    "King of Amber. Creator of the Pattern. Conqueror of all reality. Sitting upon a great throne with a greater crown wrought of silver with seven high points, studded with emeralds, and huge rubies at either temple. The jewel of judgment rests upon his chest, supported around broad shoulders by a thick golden chain.</p><p>Father.</p><p>  Oberon as a father is open to many interpretations and possibilities. Oberon is a distant father. Oberon is a loving father. Oberon is a manipulator. Oberon is a teacher. Any, all, or none of these may be true. Oberon is complicated.</p><p>  What can be said about Oberon without interpretation is that those not of royal blood within the court of Amber are terrified of him. He was ruthless enough to win wars that the subjugated are still trying to understand how they could have possibly lost. He was powerful enough to slay demons, ancient dragons, and self- proclaimed gods on the fields of battle.<p>",
};

amberCards["aurielle"] = {
  cardname: "Aurielle",
  type: "child",
  url: "../img/aurielle.png",
  parent: "velka-category",
  tagline: "Hunt",
  blurb:
    "<p>Aurielle is the founder of the Wardens of Arden and the most comfortable within the immense forest. With the ancient griffin Rosenwyn, last of her kind, the Princess is the shield against the horrors of the shadows entering through Amber by land. This duty and a love of the outdoors serve as a lodestone for the Princess - unlike her brother Lorec, Aurielle embraces the loss of memory her line faces. She knows who she is, she knows she loves her family, and that is enough.</p><p>Aurielle has been part of every conflict Amber has engaged in, and is a naturally fluent warrior as a result. Rarely leaving for the shadows, Arden and Amber serve as an endless supply of hunts, nature conservancy and finding one’s self.</p><p>Within court Aurielle is the Master of the Hunt, a title handled with no small amount of pleasure. The Princess’ relationship with Lorec is strained to the point of antagonism over moral differences. At the opposite end of the spectrum, she has taken a strong liking to Paoul, who she sees as a good person to be protected from the corrupting influences of the monarchs. </p>",
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

otherCards["edward"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Edward Kolvir",
  url: "./img/edward.png",
  tagline: "Opportunity",
  blurb: "<p>Newly appointed Duke of Kolvir.</p>",
};

const placeCards = {};

placeCards["amber"] = {
  type: "parent",
  category: "amber-category",
  cardname: "Amber",
  url: "./img/ambermap.png",
  tagline: "The Golden Realm",
  blurb:
    "<p>Amber is a realm that rests at the head of reality. When the pattern was created, mirror realms and copies of Amber spun into creation. The perfect copies of Amber were reflected into Rebma and the night city of Tir-Na Nog’th. A great void was cast beyond Arden and Garnath, upon the opposite end residing the Outlands and the Lasair Caite. The shadows slowly formed, filling the space between Amber and everywhere else with infinite imperfect reflections of Amber.</p> ",
};

placeCards["goldencircle"] = {
  type: "parent",
  category: "gc-category",
  cardname: "The Golden Circle",
  url: "./img/goldencircle.png",
  tagline: "Allies and Neighbors of Amber",
  blurb:
    "<p>Created by Queen Fina at Oberon’s command and considered a testament to her power, the shadows of the Golden Circle are the most recognizable shadows within the multiverse. These shadows represent the backbone of Amber’s trade network, being the easiest to travel to and have significant resources that are of value to Amber. Amber, in turn, provides the shadowpaths for the Golden Circle to trade with each other (conveniently with Amber as the hub for both the shadow paths and trade.)</p>",
};

placeCards["shadows"] = {
  type: "parent",
  category: "shadows-category",
  cardname: "Deeper Shadows",
  url: "./img/shadowback.png",
  tagline: "What lies beyond",
  blurb: "<p></p>",
};

placeCards["ambercity"] = {
  type: "child",
  parent: "amber-category",
  cardname: "Amber City",
  url: "./img/ambercity.png",
  tagline: "Amber's Crown Jewel",
  blurb: "",
};

placeCards["garnath"] = {
  type: "child",
  parent: "amber-category",
  cardname: "Garnath Mansion",
  url: "./img/garnath.png",
  tagline: "The king's not-so-private getaway",
  blurb:
    "<p>A vast reserve of land near Garnath  which is the King's private reserve.  There is a small village there (Garnath Village) which is entirely funded and designed by Oberon to provide him an ideal retreat location.</p><p>The surrounding area contains some of the most valuable properties in Amber, as noble estates in proximity to the reserve are considered in prime property.</p>",
};

placeCards["brandheim"] = {
  type: "child",
  parent: "amber-category",
  cardname: "Brandheim",
  url: "./img/brandheim.png",
  tagline: "The Academy of Sorcery",
  blurb:
    "<p>Velka established Brandheim as a cornerstone of Amber’s future by building a bridge to the past. Memory is more than knowledge to Velka’s blood.</p><p>The Sorcerer’s Academy of Brandheim grew to be an institution focusing on far more than magics, but its origins and greatest achievements lie there.  Located high atop Kolvir, Brandheim has dedicated its existence to mastering the power of an ancient dragon scale taken from the long-gone realm Dworkin, Oberon, and Velka originate from. For Amberites not of royal blood, this is the closest to true power one can come to. </p>",
};

placeCards["arden"] = {
  type: "child",
  parent: "amber-category",
  cardname: "Arden",
  url: "./img/ambercity.png",
  tagline: "The Eternal Forest",
  blurb:
    "<p>The shadow forest of Arden surrounds Amber from land, with the ocean being the entrance to Amber from those sailing the shadow seas</p>",
};

placeCards["rebma"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Rebma",
  url: "./img/rebma.png",
  tagline: "Everything's better, under da sea",
  blurb: "",
};

placeCards["tir"] = {
  type: "child",
  parent: "amber-category",
  cardname: "Tir na Nog'th",
  url: "./img/tir.png",
  tagline: "City of Ghosts and Shadows",
  blurb:
    "<p>Tir Na Nog’th is Amber’s ghostly reflection in the sky. It appears on moonlight nights, and can be accessed from a staircase at the top of Kolvir. Tir is known as a place of visions of the present and future, but those visions are just as often fears or hopes made manifest as well as any real providence of prophecy.</p><p>The moon city is dangerous to navigate as any interruption of moonlight, such as clouds, will cause the city to lose physicality or outright disappear depending on the level of obstruction. In addition, the ghosts of Tir Na Nog’th are not able to be communicated with in normal circumstances. The sole exceptions are for those who were fortunate enough to have a pattern blade forged for them (Ffordhir is the most famous example, though it is known that Oberon’s great blade Fremraval is also such a weapon) and children of Fina.</p>",
};

placeCards["minos"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Minos",
  url: "./img/minos.png",
  tagline: "Lords of the waves",
  blurb:
    "<p>Minos is a seafaring nation in the golden circle, currently in a steadily simmering conflict with Begma .  Currently pulled by Ava after the death of the former Pirate King, Volund at the hand of Princess Fenella.</p><p>Using the chaos from Volund's death, Ava achieved control over Minos' fractured sea kings only to be challenged by unidentified assailants from the shadows utilizing cannons with an unknown powder that somehow ignites within Minos. Ava has openly accused Begma  of this complication, something the Golden Circle neighbor categorically denies. This is to say nothing the insistence from those under Ava that Amber is due for a bloody nose; the popular argument is not even Oberon's family should be allowed to randomly murder Minosian leadership.</p>",
};

placeCards["ghenesh"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Ghenesh",
  url: "./img/ghenesh.png",
  tagline: "Home of the Moonriders",
  blurb: "",
};

placeCards["begma"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Begma",
  url: "./img/begma.png",
  tagline: "Nation of Artifice",
  blurb:
    "<p>Begma may be the most progressive of Amber’s allies. It is a constitutional democracy that benefits from many wonders of engineering and technology which are unique to the nation. Masters of steam and clockwork, they produce daily wonders and very nearly daily disasters. One sage observed that Begma remains standing only because her people’s ability to create always slightly outmatches their ability to destroy.</p>",
};

placeCards["montevalno"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Montevalno",
  url: "./img/alhambra.png",
  tagline: "Nation of Artistry",
  blurb:
    "<p>Montevalno professes to be the apex of civilization. There is no element of life in Montevalno which is not a reflection of art. The true measure of society’s success, as the Mon would state, is to provide enough means that each may pursue the calling of their heart.</p><p>On the one hand, this makes Montevalno a hub of artistic learning. Painting, sculpture, music, writing and every other art you can imagine is pursued to the most glorious of heights in the halls of the Collegia Montevalno. On the other hand, it produces a culture of insecure snobs and drama queens desperate for recognition for their latest masterpiece.</p><p>Still, the one thing it will never be is boring.</p>",
};

placeCards["penglai"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Penglai",
  url: "./img/penglai.png",
  tagline: "The Jade Empire",
  blurb: "",
};

placeCards["alhambra"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Alhambra",
  url: "./img/alhambra.png",
  tagline: "City of Gold and Glass",
  blurb: "",
};

placeCards["weirmonken"] = {
  type: "child",
  parent: "gc-category",
  cardname: "Weirmonken",
  url: "./img/weirmonken.png",
  tagline: "Where shadows are darkest",
  blurb:
    "<p>The shadow of Weirmonken is truly two places.</p><p>In one place, it is a dark realm, skies marked by cloud and lightning, visible in slivers between the long fingers of the trees. This place is Weirmonken. The great forest is infiltrated by small clearings, tenuous roads, and struggling towns. It is a rough place to live for those who inhabit the land, lost settlements being replaced by new ones, and being built upon generations that endure and wonder about their lost past as indicated from great ruined castles swallowed by the woods and the broken great walls and shattered statues.</p><p>For those who visit Weirmonken and those who inhabit it, huddling around the fires at night, they realize they are not alone. The woods are alive with predator and prey, as the trees keep silent vigil over all, ancient trees viewing the fires of civilization as a distraction from eternal night. Some of the eyes watching those fires are from the second Weirmonken, and they are the Weir.</p>",
};

placeCards["outlands"] = {
  type: "child",
  parent: "shadows-category",
  cardname: "The Outlands",
  url: "./img/outlands.png",
  tagline: "Where Chaos begins",
  blurb:
    "<p>The term Outlands is used by Amberites to refer to the realm of the Lasair Caite, much to the exasperation of the Lasair Caite themselves. In reality, the Outlands represent  the shadows around the Lasair Caite and Ceset. These shadows are disconnected and unstable, leading to fractured kingdoms and seemingly unimaginable realms that float together more as islands rather than the contiguous fabric of reality that most pattern walkers are familiar with. The thinness of the shadows in conjunction with the instability introduced by the nearby Void means the entire area is riddle with warps, gates, and other connections between shadows. These artifacts are common enough that shadow travel is fairly common, if a bit unpredictable, in the Outlands.</p><p> Dangerous creatures stalk the Outlands’ impossible worlds, and the chaotic nature lends itself to those who wish to hide things of power or importance within. It is this very combination of danger, unpredictability, and lost and hidden wealth that makes the Outlands an appealing area to enter for the beings of the Lasair Caite. Treasure hunting, sport, and adventure abound in the Outlands. While the Outlands share almost nothing in common with the logistics of the Golden Circle, the Lasair Caite tend to look at the Outlands as all the shadow that they might want to see or have influence over. </p>",
};

placeCards["abyss"] = {
  type: "child",
  parent: "shadows-category",
  cardname: "The Abyss",
  url: "./img/outlands.png",
  tagline: "The end and the beginning",
  blurb: "",
};

placeCards["ceset"] = {
  type: "child",
  parent: "shadows-category",
  cardname: "Ceset",
  url: "./img/outlands.png",
  tagline: "The name does not make the place",
  blurb:
    "<p>Ceset is the largest surviving civilization that predates the founding of Amber, sitting opposite reality at the end of shadow on an ancient land mass. The great names of the Lasair Caite came together in a bid to stop the scheme of rewriting reality by Oberon - even in the ensuing failure of that campaign, Ceset has stayed largely stable since the end of the war. King Swayvil rules over the subjugated land from the impossibly tall tower of the Thelbane, handling the increased complexities introduced in recent times.</p><p>  Known informally as the Outlands or the Edge by those in Amber, the name used by the Lasair Caite for their land is known as Ceset. Ceset is almost completely devoid of light; the exception is the Flame of Chaos which is visible from any point of the kingdom. While guests are graciously welcomed with varying light sources during their stay, navigating the lands can be treacherous for newcomers without one of the shapeshifting inhabitants assisting in movement through the land. For significant visits from dignitaries such as King Oberon or one of his children, great conjurations are cast to create a sunless sky that casts the land as one would expect on a clear moonlight night.</p> ",
};

placeCards["flame"] = {
  type: "child",
  parent: "shadows-category",
  cardname: "The Flame of Chaos",
  url: "./img/flame.png",
  tagline: "All things burn",
  blurb:
    "<p>Very little is understood about the Flame of Chaos beyond its origins and consequences. Commonly agreed to have been sparked by the death of Oberon’s wife Milesia, the flame grew into a massive forge of life and entropy. To this day it produces an endless amount of demonic beings that flee into the Abyss. Most of these demons are never seen again, either lost within the depths of the Reach or going to places unknown. A smaller amount seems drawn to the edge of the Lasair Caite, engaging in an endless war with the military forces fortified along the edges of the Outlands. And yet a few seem to navigate the Abyss successfully, coming to one of the four kingdoms of the Reach and incorporating into the societies within.</p><p>The Flame itself is so large as to defy easy measurement - there is an active debate among scholars and sorcerers as to whether or not the flame’s growth continues or has halted. What is known is that, at the end of the Red Rebellion, Amber had surrounded the flame with checkpoints and that the greatest sorcerers of both Oberon and Swayvil’s kingdoms came together to extinguish the flame. All efforts failed.</p>",
};

export { amberCards, otherCards, placeCards };
