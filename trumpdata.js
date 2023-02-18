"use strict";

const amberCards = {};

// Categories

amberCards["oberon"] = {
  type: "parent",
  category: "oberon-category",
  cardname: "Oberon",
  url: "./img/oberon.png",
  tagline: "King",
  blurb:
    "King of Amber. Creator of the Pattern. Conqueror of all reality. Sitting upon a great throne with a greater crown wrought of silver with seven high points, studded with emeralds, and huge rubies at either temple. The jewel of judgment rests upon his chest, supported around broad shoulders by a thick golden chain.</p><p>Father.</p><p>  Oberon as a father is open to many interpretations and possibilities. Oberon is a distant father. Oberon is a loving father. Oberon is a manipulator. Oberon is a teacher. Any, all, or none of these may be true. Oberon is complicated.</p><p>  What can be said about Oberon without interpretation is that those not of royal blood within the court of Amber are terrified of him. He was ruthless enough to win wars that the subjugated are still trying to understand how they could have possibly lost. He was powerful enough to slay demons, ancient dragons, and self- proclaimed gods on the fields of battle.<p>",
};

amberCards["velka"] = {
  type: "parent",

  category: "velka-category",
  cardname: "Velka",
  url: "./img/velka.png",
  tagline: "Memory",
  blurb:
    "<p>The children of Velka are older than recorded history. Even in the stasis of Amber, only weather-worn statues are any reminder of the first queen of the one true world. Two of her children died - the nameless bastard from a supposed affair who grew to be worshiped as a god of war, and Prince Anderon. The Anderon Hall district of Amber is named in his honor. Two of Velka’s surviving children, Lorec and Aurielle, have been Oberon’s representatives overseeing the surrender of the Abyssal Reach. They have only recently returned to take their place within the court.</p>",
};

amberCards["fina"] = {
  type: "parent",
  category: "fina-category",
  cardname: "Fina",
  url: "./img/fina.png",
  tagline: "Dreams",
  blurb:
    "<p>Literal portraits of expectation, the children of Fina were crafted from canvas to address the failings of the prior generation. While flesh and blood, they are still tied to their portraits within the great gallery of Amber. The gallery is, outside of the great Pattern within Kolvir, the most heavily guarded area of the palace as a result. Only one portrait has ever been known to be destroyed, resulting in someone’s death - that of Fina herself, destroyed by Oberon. Three portraits of children between Fina and Oberon were created; Suil Leir is the oldest, with Fenella and Roichard created shortly before Fina’s death. The rumor of a fourth portrait being stolen after Fina’s death are just rumors, of course.</p><p>As a child of Fina, reality and shadow are as thin and malleable as a piece of paper. They are master creators and artists, pulling items from thin air or otherwise creating through canvas, song, and the written word.</p>",
};

amberCards["milesia"] = {
  type: "parent",
  category: "milesia-category",
  cardname: "Milesia",
  url: "./img/milesia.png",
  tagline: "Chaos",
  blurb:
    "<p>A heritage born from the Void at the end of shadow known as the Lasair Caite, Milesia’s children were raised to know both the power of the Amber and the lightless magic of the Outlands. Milesia’s betrayal of her homeland aided greatly in Amber’s conquest of such a distant foe, and the end of Amber’s campaigns seemed imminent. There is a court rumbling, though, that betrayal breeds betrayal, as Milesia was murdered by her oldest daughter Ophelia. The flame of Chaos was born from Milesia’s death, and another era of war against Amber began.</p>",
};

amberCards["eirashaol"] = {
  type: "parent",
  category: "eirashaol-category",
  cardname: "Eira Shaol",
  url: "./img/eirashaol.png",
  tagline: "Queen",
  blurb:
    "<p>Queen of Rebma as long as there has been a Rebma, Eira Shaol is an ancient influence upon Amber and the shadow seas. Her greatest efforts have been upon ensuring stability for the underwater kingdom, given that the Chaos of the above land is inevitably reflected upon her kingdom. As a result, Rebma routinely intervenes on Amber’s behalf to prevent the results of endless conflict from reaching her sands. Eira’s marriage to Oberon was the result of a negotiated partnership with the threat the flame of Chaos posed Amber through the Red Rebellion.</p><p>The children of Eira Shaol have blood claims to both the thrones of Amber and Rebma. This, along with Eira Shaol still being married to Oberon, has led to a unique amount of attention being provided the children in their relatively short lives.</p><p>While the queen is technically protected by the Crows, she also has a loyal personal guard lead by the The Kahlverian.</p>",
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
  tagline: "Vision",
  blurb:
    "<p>Formerly the royal court sorcerer, the hunchback Dworkin ceded the role in recent years to Princess Ciara . Becoming more elusive as a result, the old dwarf tends to operate by sending trusted servants and proxies. That Dworkin is classified as a faction and not as a courtier is because he tends to be heavily involved in assigning seemingly mundane and obtuse tasks to other powers and factions, who are eager to do the reclusive figure a favor.<p></p>Dworkin's representatives, beyond engaging with those in the court, are often seen running a mix of errands in the cities of Amber and the Golden Circle. Wearing traditional red cloaks with the Unicorn embroidered in gold, Dworkin's proxies also run an art gallery in the lower city dedicated to Dworkin's psychedelic paintings and the Masters brand of oils that Dworkin creates and sells.</p>",
};

// Velka

amberCards["anderon"] = {
  cardname: "Anderon",
  type: "child",
  url: "../img/anderon.png",
  parent: "velka-category",
  tagline: "Fallen",
  blurb:
    "<p>Anderon is more of a historical figure than a family member. His life so long ago that Aurielle and Lorec only remember what they intentionally wrote or stored away, the prince was known to be vital in defeating his brother the Bastard and Velka. It is said that the district of Amber now known as Anderon Hall is so named because that is where the prince died. Lorec suggests that Anderon Hall is a mispronunciation and that the area was originally known as Anderon’s Fall before Oberon grew impatient with the label.</p><p>While the history books are vague beyond the expected platitudes, a week out of every year is dedicated to Anderon’s sacrifice for Amber. Festivals, parades, and a grand tournament with melee, jousting and other martial competitions are held by the Crown during this time.</p>",
};
amberCards["lorec"] = {
  cardname: "Lorec",
  type: "child",
  url: "../img/lorec.png",
  parent: "velka-category",
  tagline: "War",
  blurb:
    "<p>The prince appears noticeably older than even his sister from Velka, and is rarely seen without orders or reins in hand. Lorec has been a war horse for Oberon, though the rest of the family has debated as to the fanatic tendencies that he pursues to stay perpetually in conflict. If one asks Lorec, he states that the defense of Amber is all.</p><p>While Lorec is far from hostile to the family, his distance with others has only grown through each war - his friendship and closeness with Fenella is the one time when others might capture a glimpse of who Lorec once was. Lorec is loyal to a fault when it comes to the family, though. He is just not the cheeriest one.</p><p>Lorec’s absence at court is profound, but not unexpected.</p>",
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

// Fina
amberCards["suillir"] = {
  cardname: "Suil Lir",
  type: "child",
  url: "../img/suillir.png",
  parent: "fina-category",
  tagline: "Night",
  blurb:
    "<p>Suil Leir is the Night Warden of Arden. A title made up largely by Aurielle to acknowledge Suil Leir’s nocturnal tendencies, the Prince operates a force overlooking the valley of Garnath and the Oisen river from a makeshift fort, the prior fortifications flattened during the Red Rebellion and still under reconstruction. Suil Leir truly is the owl to Aurielle’s hawk.</p><p>Of course, Suil Leir’s love of the night truly has to come from the grand paintings he creates from his camps when he isn’t hunting or patrolling around Amber. These portraits are invariably of great hunts and conflicts that Suil Leir has taken part in, or more troubling, will take part in. These paintings are said to be a large compliment to the Prince’s gifts as a natural hunter.</p>",
};

amberCards["fenella"] = {
  cardname: "Fenella",
  type: "child",
  url: "../img/fenella.png",
  parent: "fina-category",
  tagline: "Artist",
  blurb:
    "<p>Princess Fenella embraces both Fina’s love of the arts and Oberon’s almost legendary temper. From an early age the Princess has taken to the sea, forging a lifelong friendship with Lorec during her service in the north fleet and eventually growing to be Lord Admiral in Amber’s navy. Fenella’s crowning military achievement was aiding Rebma in the defeat of the Chaos Leviathans during the Red Rebellion while Amber city held off Ophelia’s siege.</p><p>More recently, and more controversial, Fenella had a brief engagement to pirate king Volund of Minos before she broke off both the arrangement and Volund’s neck. Fenella’s absence during the Twin Uprisings was due to having to deal with the famed fleets of Minos in a series of skirmishes until a new pirate king could replace Volund. This resulted in the crown of Amber stripping Fenella of being Lord Admiral, seeking to prevent a more prolonged conflict.</p><p>Fenella currently serves as the royal court artist.</p>",
};

amberCards["roichard"] = {
  cardname: "Roichard",
  type: "child",
  url: "../img/roichard.png",
  parent: "fina-category",
  tagline: "Creation",
  blurb:
    "<p>Roichard claims he came into this world with a wrench in one hand and a brush in the other - given the rumors of how he was created by Fina and Oberon, some may even believe the Prince. Fascinated by mechanisms as long as he can remember, Roichard has adopted the Golden Circle shadow of Begma as a second home, and owns a large estate in the city state of Dinalo. Loud and boisterous, Roichard is possibly responsible for more explosions in Amber than anyone else as a result of efforts to get technology working.</p><p>  Roichard has no official title in Amber beyond Prince of Amber,but is known for are the varying war machines he has constructed in the shadows for Amber’s conquests and defenses. Recently, Roichard has gotten the first successful trans-shadow railway between Begma and Montevalno running (somewhat) reliably.</p><p>With the onset of peace, Roichard comes to court when summoned but otherwise paints his next great mechanism, contraption, or dream. Bevin is often a partner in the great Begman workshop Roichard operates out of, and they are working on a top secret mechanical  construct that they have fondly named ‘Dextero.’.</p>",
};

amberCards["cethlenn"] = {
  cardname: "Cethlenn",
  type: "child",
  url: "../img/cethlenn.png",
  parent: "fina-category",
  tagline: "Reflection",
  blurb:
    "<p>Cethlenn was raised largely in Tir, with occasional forays (often unannounced ahead of time) to other Shadows. She was taught that being kept out of sight was for her safety, as if she attracted too much attention it would put her in danger. She’s never quite been certain who the danger would come from -- Oberon? Tir? Her mother’s loyal retainers? Political machinations she’s unaware of? -- but the fact remains that she grew up ever-aware that calling attention to herself would be tantamount to suicide. Luckily, in Tir, it was easy to learn how to drift by silently.</p><p>When Princess Cethlenn, the long-lost daughter of Fina, was recognized and welcomed into Amber’s court by King Oberson, Cethlenn was perturbed to discover that she had no knowledge of the double taking her place. Her memories of that era are dim, flickers and moments and half-caught glimpses. She came back to herself in the Forest of Arden with Suil Lier, and grounded herself on Tir Na Nog’th’s Pattern hours later. Her false twin died, and Cethlenn survived the Pattern but lost her ability to remain in Tir after sunrise.</p><p>Since then, Cethlenn has slipped into the role of Princess of Amber, which another played before her.</p>",
};

// Milesia
amberCards["ophelia"] = {
  type: "child",
  cardname: "Ophelia",
  url: "../img/ophelia.png",
  parent: "milesia-category",
  tagline: "Flame",
  blurb:
    "<p>Eldest child and first daughter of Daughter of Oberon and Milesia.</p><p>Ophelia was a child born of rebellion during the lengthy conflict with the Lasair Caite, growing up pulling at Dworkin’s beard and chasing her pet skunk Iris. Dworkin and she took to each other, and Ophelia spent her formative years learning all she could from the old sorcerer.</p><p>Ophelia went to study - first at the Brandheim Academy in Amber, followed by time at the Jade Empire’s Crane Palace, and then at Harvard on shadow Earth. Gathering her surgical doctorate, Ophelia proceeded to modernize the Amber clinics as much as she possibly could with the limitations in place. While pioneering surgical medicine in Amber, she grew closer to Milesia, learning the powers of the Edge. When Ciara was born, Ophelia was inseparable from her younger sister, and she always was friendly to her brothers.</p><p>No one knows what drove her to  slit Milesia’s throat, the queen's death igniting as the first spark that would become the flame of Chaos.</p> ",
};

amberCards["ciara"] = {
  cardname: "Ciara",
  type: "child",
  url: "../img/ciara-web.png",
  parent: "milesia-category",
  tagline: "Burned",
  blurb:
    "<p>Second daughter of Oberon and Ophelia, she has been Dworkin's student and currently serves as Amber's sorcerer in residence. She was married, for a time, to a lord of the Lasir Caite, and her children have gotten old enough to start taking an interest in Amber.</a>.</p>",
};

amberCards["borel"] = {
  cardname: "Borel",
  type: "child",
  url: "../img/borel.png",
  parent: "milesia-category",
  tagline: "Abyss",
  blurb:
    "<p>Third child and first son of Oberon and Ophelia, Borel spends most of his time in what he describes as 'his studies' but which others refer to as 'plugging holes in the universe'.  He is one of the more sorcerously knowledgeable members of the family, but consistently defers to his hister on such matters. </a>.",
};
amberCards["bevin"] = {
  cardname: "Bevin",
  type: "child",
  url: "../img/bevin.png",
  parent: "milesia-category",
  tagline: "Death",
  blurb:
    "<p>“Keenly aware of the family across the shadows and the challenges he has had connecting with the Lasair Caite, Bevin views the royal family of Amber as a gift, if one that has to be handled carefully. With gloves.</p><p> The prince is an incredibly gifted warrior, his reputation cemented in infamy after besting Lorec at one of the melees in Anderon’s name. Bevin is loathe to draw a blade, however, and views the explosion of life in the shadows as the ultimate gift that Amber’s creation provides. He will truly kill only as a last resort, though once the decision has been made very little will change Bevin’s mind about the task at hand.</p><p>Bevin convinced Eira Shaol to make him Amber’s ambassador to the Golden Circle and relishes exploring the primal shadows to learn every detail, every alley, every hidden statue.</p>",
};

amberCards["alaric"] = {
  cardname: "Alaric",
  type: "child",
  url: "../img/alaric.png",
  parent: "milesia-category",
  tagline: "Reveller",
  blurb:
    "<p>Alaric has done everything in his power to avoid responsibility from the time that he Test trump call and a thousand worlds away, Alaric vowed to get away from the endless conflicts the family found itself in and to live his life in quiet, hedonistic glory. This plan somewhat backfired, as it was Alaric who first found the shadow Earth that has become a second home for many of the family.</p><p>Alaric’s excursions and fancies into every desire imaginable inadvertently turned the prince into a master shadow manipulator. This ability, combined with motivation from Milesia’s murder, fueled Alaric’s contributions in the Red Rebellion and Abyssal reach wars. The speed in which he moved armies through the shadows is still talked of among some of the family as a thing of legend.</p>",
};

// Eira Shaol

amberCards["pauol"] = {
  cardname: "Paoul",
  type: "child",
  url: "../img/pauol.png",
  parent: "eirashaol-category",
  tagline: "Prince",
  blurb:
    "<p>The declared heir to the throne of Amber, Paoul is of a temperament that is far friendlier than one might expect from being relentlessly pushed to prepare for ruling the universe. Striving to understand and relate to all of his relatives, Paul has the best upbringing, education, advisers, and food testers that can possibly be. But he has rarely been tested, and only after getting outside of the protective bubble the crown has put on their investment.</p><p>As Paoul grew into himself and the role of a Prince of Amber, he managed to establish some measure of breathing room upon walking the Pattern and finding ways to escape the Queen’s gaze with the help of siblings. Paoul’s most recent disobedience was in taking up the blade and going to fight for the defense of Rebma during the Red Rebellion. To this day, he hides who helped him get to the front, so as to protect them from the Queen’s wrath.</p><p>Now Paoul splits is time between shadow and the newly critical court of Amber.</p>",
};

amberCards["liabelle"] = {
  cardname: "Liabelle",
  type: "child",
  url: "/img/liabelle.png",
  parent: "eirashaol-category",
  tagline: "Resolver",
  blurb:
    "<p>Liabelle is never not at war, it is only the means which change</p>",
};

amberCards["diolinda"] = {
  cardname: "Diolinda",
  type: "child",
  url: "/img/diolinda.png",
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
  blurb:
    "Born during Velka's reign, the Bastard's name and history have been wiped from Amber's collective memory, save that he rebelled against Oberon, and it went badly for him.",
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

otherCards["edward"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Edward Kolvir",
  url: "./img/edward.png",
  tagline: "Opportunity",
  blurb: "<p>Newly appointed Duke of Kolvir.</p>",
};

otherCards["arlan"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Arlan Feldane",
  url: "./img/arlan.png",
  tagline: "Youth",
  blurb:
    "<p>The youngest of the Feldane line, Oberon picked Arlan as the most recent cup bearer after the Red Rebellion.</p>",
};

otherCards["richard"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Richard Karm",
  url: "./img/richard.png",
  tagline: "Duty",
  blurb:
    "<p>Master at arms Richard Karm is the court-appointed military officer responsible for overseeing the training of military units within the army, including the city watch, local garrisons, and the royal guard. </p>",
};

otherCards["ilyana"] = {
  type: "child",
  parent: "ambercourt-category",
  cardname: "Ilyana Karm",
  url: "./img/ilyana.png",
  tagline: "Balance",
  blurb: "<p></p>",
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
  blurb:
    "<p>David Rockscomb was a record producer in a Very 80s shadow that did not survive one of the problems that Borel deals with, and was one of the survivors that Borel got out. He was given the bar & music venue 'Making Waves' in Amber City to run, where he writes music and supports artists and also acts as Borel's personal Jim Steinman. </p><p>Absolutely the kind of guy who smokes cigars and calls people 'baby'.</p>",
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

// Chaos

otherCards["pyson"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Pyson Chanicut",
  url: "./img/pyson.png",
  tagline: "Adventure",
  blurb:
    "<p>Son of Princess Ciara and the deceeased Caleb Cahanicut. He was raised in Chaos, out of the sight of Amber, and now spends his days adventuring across the Outlands.</p>",
};

otherCards["mikaya"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Mikaya Chanicut",
  url: "./img/mikaya.png",
  tagline: "Potential",
  blurb:
    "<p>Daughter of Princess Ciara and the deceeased Caleb Cahanicut, she was raised in Chaos out of ssight of Amber. She has become an active participant in the court and is an Advisor to King Swayvill.  However, as one among many, many advisors, she is frustrated by her relative powerlessness and the king's conservative nature. She has recently reached out to her relatives in Amber to see what other paths might be open to her.</p>",
};

otherCards["galina"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Galina Sawall",
  url: "./img/galina.png",
  tagline: "Silence",
  blurb:
    "<p>Milesia’s younger sister and daughter of King Swayvil of the Lasair Caite. Galina was appointed ambassador to Amber after the end of the second Lasair Caite war. While tensions remain high between Amber and the Lasair Caite, Galina has driven much of the effort to maintain the peace. Without much of a need or ability to trade with Amber or the Golden Circle, a lot of the ambassador’s focus has been on making sure efforts taken by the Thelbane to strengthen their position after a series of wars do not come across as unnecessarily bellicose.</p>",
};

otherCards["samson"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Samson Chanicut",
  url: "./img/samson.png",
  tagline: "Trickster",
  blurb: "<p>Paramour of Cethlenn. Troublemaker. Recurring foil of Borel</p>",
};

otherCards["simon"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Simon Helgram",
  url: "./img/simon.png",
  tagline: "Outsider",
  blurb:
    "<p>An accomplished sorcerer within the Lasair Caite, Simon traveled to Amber’s court to see what all the fuss was about. He has his own small retinue but will profess to largely being a spectator. Coming from the house of Helgram, Simon does have enough weight in his homeland to assist in matters of complexity there.</p>",
};

otherCards["irina"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Auntie Irina Sawall",
  url: "./img/irina.png",
  tagline: "Grandmother",
  blurb:
    "<p>Irina Sawall is one of the many aunties of the Laser Caite - their exact position and relations has become unclear over time, but their age, wisdom and power makes them an informal power in Chaos.  Irina is the archetypical scary old witch in the woods, surrounded by houses made of candy and creepy dolls.<p></p>She is one of the figures pressuring Borel to take up the mantle of keeper of the Abyss, going so far as to trap him in one of her ways in an attempt to persuade him. </p>",
};

otherCards["richeza"] = {
  type: "child",
  parent: "lasaircaite-category",
  cardname: "Richeza",
  url: "./img/richeza.png",
  tagline: "Spider",
  blurb:
    "<p>The loose and other worldly kingdoms of the Abyssal Reach are represented as one voice by Richeza, a demonic being who maintains a human form while in Amber. While the Reach may have interests and concerns that are occasionally floated to the crown of Amber and the associated court, far more often the Ambassador’s role is to hear of grievances and concerns about abyssal corruption from shadows within and beyond the Golden Circle. It is Richeza who tasks the Abyss Hunters to go combat the corruption of the Abyss where Amber or the others need such actions taken.</p>",
};

// Shadow
otherCards["prudence"] = {
  type: "child",
  parent: "shadow-category",
  cardname: "Prudence Taylor",
  url: "./img/prudence.png",
  tagline: "Propriety",
  blurb:
    "<p>Prudence Taylor speaks on behalf of Begma City and the other city states in the shadow of Begma. The court of Amber is a prime place for the Ambassador to assist Begman interests not only in trade but in technological experimentation. Finding out what works where in other shadows is a key to expanding Begman technological industry and patent royalties. Ambassador Taylor also has a permanent office in the Amber IAAL branch, due to her extensive engagement with the lawyers there. </p>",
};

otherCards["wesley"] = {
  type: "child",
  parent: "shadow-category",
  cardname: "Kathryn Wesley",
  url: "./img/wesley.png",
  tagline: "Outnumbered",
  blurb:
    "<p>Kathryn Wesley is an accomplished hunter and the de factor leader of the  Elderhorn Lodgeof Weirmonken. Rumored to be one of the broken lines of lineage within Weirmonken, Kathryn's life has been dedicated in recent years to helping contain and ward off the Weir.</p><p>Exhausted by years of fighting an elusive and deadly opponent, in recent times Kathryn has convinced the local nobility within Weirmonken to start trying to find ways to increase trade and commerce as a beginning point of getting aid from the Golden Circle shadows for assistance in their fight.  While that effort is playing out, though, Kathryn leads the hunters of the lodge in stalking a superior opponent to try to make the lands safer for those who inhabit it.</p>",
};

otherCards["lucatiel"] = {
  type: "child",
  parent: "shadow-category",
  cardname: "Darkdiver Lucatiel",
  url: "./img/lucatiel.png",
  tagline: "Mercenary",
  blurb:
    "<p>Lucatiel is an Abyss Hunter famous for not being one of the beings of the Abyssal Reach. A shadow dweller, she picked up the cursed armor of a fallen hunter who had tried and failed to stave off the corruption of the Abyss within her shadow of Mirrah. While Mirrah fell, Lucatiel’s vengeance has made her a figure within the Reach. She serves as a mercenary to combat the Abyss if the Abyssal Reach is not able to respond quickly enough to save a shadow. </p>",
};

otherCards["zhao"] = {
  type: "child",
  parent: "shadow-category",
  cardname: "Zhao Lihua",
  url: "./img/zhao.png",
  tagline: "Enlightenment",
  blurb:
    "<p>A representative of the Jade Empire from the imperial seat of Penglai, Zhao Lihua has been honored to speak with the voice of the Emperor on matters of state at the court of Amber. Zhao Lihua has additional duties beyond matters of state, recording interesting tales from other shadows of the Golden Circle and seeking cultural exchanges as part of the Great Enlightenment ordered by Emperor Ban. </p>",
};

export { amberCards, otherCards };
