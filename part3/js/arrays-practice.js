
//STEP 1
var favMovies = ["Justice League", "Joker", "Spider-Man", "Wolf of the Wall Street", "Avengers"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Justice League";
movies[1] = "Joker";
movies[2] = "Spider-Man";
movies[3] = "Wolf of the Wall Street";
movies[4] = "Avengers";
window.console.log(movies[0]);

//STEP 3
var movies2 = new Array(5);
movies2[0] = "Justice League";
movies2[1] = "Joker";
movies2[2] = "Spider-Man";
movies2[3] = "Wolf of the Wall Street";
movies2[4] = "Avengers";

movies2.splice(2, 0, "Gravity");
window.console.log(movies2.length);

//STEP 4
var favMovies2 = [];
favMovies2[0] = "Justice League";
favMovies2[1] = "Joker";
favMovies2[2] = "Spider-Man";
favMovies2[3] = "Wolf of the Wall Street";
favMovies2[4] = "Avengers";

delete favMovies2[0];
window.console.log(favMovies2);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "Justice League";
favMovies3[1] = "Joker";
favMovies3[2] = "Spider-Man";
favMovies3[3] = "Wolf of the Wall Street";
favMovies3[4] = "Avengers";
favMovies3[5] = "Batman Returns";
favMovies3[6] = "James Bond- Casino Royal";

for (var index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}


//STEP 6
var favMovies4 = [];
favMovies4[0] = "Justice League";
favMovies4[1] = "Joker";
favMovies4[2] = "Spider-Man";
favMovies4[3] = "Wolf of the Wall Street";
favMovies4[4] = "Avengers";
favMovies4[5] = "Batman Returns";
favMovies4[6] = "James Bond- Casino Royal";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "Justice League";
favMovies5[1] = "Joker";
favMovies5[2] = "Spider-Man";
favMovies5[3] = "Wolf of the Wall Street";
favMovies5[4] = "Avengers";
favMovies5[5] = "Batman Returns";
favMovies5[6] = "James Bond- Casino Royal";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "Justice League";
favMovies6[1] = "Joker";
favMovies6[2] = "Spider-Man";
favMovies6[3] = "Wolf of the Wall Street";
favMovies6[4] = "Avengers";
favMovies6[5] = "Batman Returns";
favMovies6[6] = "James Bond- Casino Royal";

var leastFavMovies = [];
leastFavMovies[0] = "Inside Out";
leastFavMovies[1] = "Dark water";
leastFavMovies[2] = "Frozen";

window.console.log("Movies I like:\n\n");
for (var index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (var index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var favMovies6 = [];
favMovies6[0] = "Justice League";
favMovies6[1] = "Joker";
favMovies6[2] = "Spider-Man";
favMovies6[3] = "Wolf of the Wall Street";
favMovies6[4] = "Avengers";
favMovies6[5] = "Batman Returns";
favMovies6[6] = "James Bond- Casino Royal";

var leastFavMovies = [];
leastFavMovies[0] = "Inside Out";
leastFavMovies[1] = "Dark water";
leastFavMovies[2] = "Frozen";

var movies = favMovies6.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var favMovies6 = [];
favMovies6[0] = "Justice League";
favMovies6[1] = "Joker";
favMovies6[2] = "Spider-Man";
favMovies6[3] = "Wolf of the Wall Street";
favMovies6[4] = "Avengers";
favMovies6[5] = "Batman Returns";
favMovies6[6] = "James Bond- Casino Royal";

var leastFavMovies = [];
leastFavMovies[0] = "Inside Out";
leastFavMovies[1] = "Dark water";
leastFavMovies[2] = "Frozen";

var movies = favMovies6.concat(leastFavMovies);
movies.sort();
movies.reverse();
window.console.log(movies.pop());
