1) I finished the show route for /symptoms/:id.  I tried to set it up the same as the route for /diseases/:id, but it doesn't seem to like it if in the value of the "Diseases" input box is the same as a disease that already exists.  Not sure what's different, as it seems to work ok when you list an already created symptom in the "Create Disease" form.

2) Add a picture to both show views.  One is a picture of a guy coughing and the other is a microscopic look at germs.

3) Added the "list-group-item" class to my list of diseases on the "diseases/all" view.  I liked how it broke up the list.

Also added the "col-sm" class to some divs on the "diseases/all" view.  I was trying to get it where the picture and h1/h3 were side by side, with the picture taking up roughly 2/3rds and the titles taking up the remaining 1/3rd.  It basically worked, but didn't seem to change if I had 1 div be col-sm and the other be col-md/lr/xl.  Not sure what I needed to do differently to get it to work.  Or maybe they can't be different sizes?  It can only divide the divs equally across the "row"?  I also had to end up flexing the "row" div in order for them to be side by side.  Seemed like from the documentation that having the parent div have the class "row" and the grandparent div have the class "container" would have done it automatically.
