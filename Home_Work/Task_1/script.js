"use strict";
// main variables

let     filmsName,
        filmsMark;

// Создать обьект со свойствами
    let personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        enterFilmsQuantity: function() {
            this.count = +prompt("How many films have u watched ?", "");
            if (this.count == "" || this.count < 0 || isNaN(this.count) || this.count == undefined)  {
                this.ifErrorFilmsQuantiy();
            }
        },
        ifErrorFilmsQuantiy: function() {
            do {
                this.count = +prompt("Error, please enter again: How many films have u watched ?", "");
            } while (this.count == "" || this.count < 0 || isNaN(this.count) || this.count == undefined);
        },
        start: function() {
            for (let i = 1; i <= this.count; i++) {
            this.enterFilmsName();
            this.enterFilmsMark();
            this.movies[filmsName] = filmsMark;
            }
        },
        enterFilmsName: function() {
            filmsName = prompt("Enter film name", "");
            if (filmsName == "" || filmsName == null || filmsName == undefined || filmsName.length > 50) {
                this.ifErrorFilmsName();
            }
        },
        ifErrorFilmsName: function() {
            do {
                filmsName = prompt("Error, please enter film name again", "");
            } while (filmsName == "" || filmsName == null || filmsName == undefined || filmsName.length > 50);
        },

        enterFilmsMark: function() {
            filmsMark = +prompt("Enter films mark", "");
            if (filmsMark == "" || filmsMark < 0 || isNaN(filmsMark)) {
                this.ifErrorFilmsMark();
            }
        },
        ifErrorFilmsMark: function() {
            do {
                filmsMark = +prompt("Error, please enter its mark again", "");
            } while (filmsMark == "" || filmsMark < 0 || isNaN(filmsMark));
        },

        checkMyLevel: function() {
            if (this.count < 10 && this.count >= 0) {
                alert("Wathced films q-ty is too low");
            } else if (this.count >= 10 && this.count <= 30) {
                alert (" U are classic watcher");
            } else if (this.count > 30) {
                alert("U are KINOMAN");
            }
        },
        showMyDB: function() {
            if(personalMovieDB.privat == false) {
                 console.log(personalMovieDB);
             }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                const genre = prompt(`Enter your favorite genre #${i}`); //можно сделать без переменной (будет быстрее)
                if (genre != "" && genre != null && genre != undefined) { 
                this.genres[i - 1] = genre;
                } else {
                    i--;
                }
            }
            this.genres.forEach(function(item, i) {
                console.log(`My favorite #${i+1} this is ${item}`);
            });
           // OR this.genres.forEach((item, i)) => {
           //    console.log(`My favorite #${i+1} this is ${item}`);
           //  }
        },
        toggleVisibleMyDB: function() {
            if (this.privat == false) {
                this.privat = true;
            } else {
                this.privat = false;
            }
        }
    };

personalMovieDB.enterFilmsQuantity();
personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();








// MAIN ENTER FUNCTIONS LOGS
  /*  function enterFilmsQuantity () {
        filmsQuantity = +prompt("How many films have u watched ?", "");
        if (filmsQuantity == "" || filmsQuantity < 0 || isNaN(filmsQuantity) || filmsQuantity == undefined)  {
            ifErrorFilmsQuantiy();
        }
        personalMovieDB.count = filmsQuantity;
    } */

 /* function enterFilmsName () {
        filmsName = prompt("Enter film name", "");
        if (filmsName == "" || filmsName == null || filmsName == undefined || filmsName.length > 50) {
            ifErrorFilmsName();
        }
    } */

 /*   function enterFilmsMark () {
        filmsMark = +prompt("Enter films mark", "");
        if (filmsMark == "" || filmsMark < 0 || isNaN(filmsMark)) {
            ifErrorFilmsMark();
        }
    } */

    /* function checkMyLevel () {
        if (filmsQuantity < 10 && filmsQuantity >= 0) {
            alert("Wathced films q-ty is too low");
        } else if (filmsQuantity >= 10 && filmsQuantity <= 30) {
            alert (" U are classic watcher");
        } else if (filmsQuantity > 30) {
            alert("U are KINOMAN");
        }
    } */

/*    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Enter your favorite genre #${i}`); //можно сделать без переменной (будет быстрее)
            personalMovieDB.genres[i - 1] = genre;
        }
    } */

/*    function showMyDB () {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    } */
////////////////////////////////////

// IF ERROR FUNCTIONS
/*    function ifErrorFilmsQuantiy () {
        do {
            filmsQuantity = +prompt("Error, please enter again: How many films have u watched ?", "");
        } while (filmsQuantity == "" || filmsQuantity < 0 || isNaN(filmsQuantity) || filmsQuantity == undefined);
        personalMovieDB.count = filmsQuantity;
    } */

/*    function ifErrorFilmsName () {
        do {
            filmsName = prompt("Error, please enter film name again", "");
        } while (filmsName == "" || filmsName == null || filmsName == undefined || filmsName.length > 50);
    } */

 /*   function ifErrorFilmsMark () {
        do {
            filmsMark = +prompt("Error, please enter its mark again", "");
        } while (filmsMark == "" || filmsMark < 0 || isNaN(filmsMark));
    } */
////////////////////////////////////

//enterFilmsQuantity();

/*    if (filmsQuantity < 10 && filmsQuantity >= 0) {
        alert("Wathced films q-ty is too low");
        start();
    } else if (filmsQuantity >= 10 && filmsQuantity <= 30) {
        alert (" U are classic watcher");
        start();
    } else if (filmsQuantity > 30) {
        alert("U are KINOMAN");
        start();
    } */

/* Cycle updating DB
    function start () {
        for (let i = 1; i <= filmsQuantity; i++) {
        personalMovieDB.enterFilmsName();
        personalMovieDB.enterFilmsMark();
        personalMovieDB.movies[filmsName] = filmsMark;
        }
    } */


