"use strict";
const pageHeader = document.querySelector("header");

const headerContent = ` 
<div class="overlay"></div>
<div class="hamburger">
<img src="img/menu.png" class="menuburger" />
</div>

<ul id="navigator">
<li><a href="index.html">About</a></li>
<li><a href="scions.html">Scions of Amber</a></li>
<li><a href="cards-ambercourt.html">The Court of Amber</a></li>
<li><a href="cards-other.html">Others of Note</a></li>
<li><a href="places.html">Places</a></li>
<li><a href="flipcards.html">The Spread</a></li>
<li><a href="divination.html">Divination</a></li>
<li><a href="itemcards.html">Tabletop</a></li>
<li><a href="brandheim.html">Brandheim U</a></li>

<li><a href="https://prosperity-amber.slab.com">Slab</a></li>
</ul>`;

makeHeader();
function makeHeader() {
  pageHeader.innerHTML = headerContent;
  console.log(
    "Header updated on th pages that ue shared, but I need to add logic to highlight the current page. Heade ris also jumping on the flipcards page.  Maybe add the information window under the divination, or allow it as a toggle?  (might mean adding help) - also, woud that same format work well for the infor pages?  Divination might actually move the button to the top middle, whcih woudl also allow the divination page to flow vertically on narrow things.  Could I add logic to autonatically rortate place cards when they're pulled off the deck?"
  );
}
