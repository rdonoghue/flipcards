# flipcards

## Small TODO:

- add some help text to the pages (tabletop, divination etc) so people know they can move the cards
- decide if I keep draw 1 (probably not?)
- update readme for strangers

## Big TODO:

- Mobile is still half assed, but I'm not 100% sure how this SHOULD work on a phone
- Ugh, I really may need to get the data source switched over to JSON at some point here. No actual need yet, but it's getting cumbersome enough that I can feel the pressure.
- Same for a general site overhaul. Initially built this all kind of flat. I pulled the scripts and styles into folders and that had helped some, but the tabletop keep getting more complicated, and I really should break it up for ease of management.

IDEA:

- Move the header build into Javascript so I can stop updating it everywhere.

## Contributor notes

-Images go into /img/
-The files that (I think) need to be updated to incorproate new people across the site are:
    * /scripts/trumpdata.js
    * /styles/namedcards.css
    * /flipcards.html
    * /tabletop/cards/trumpdata.js
    * /tabletop/data/cards.json
    * /tabletop/data/trumpdata.js
-For place images make sure to rotate 90 degrees clockwise from the base image if you are starting in a 16:9 ratio