"use strict";
// main variables
    let filmsQuantity,
        filmsName,
        filmsMark;

// Создать обьект со свойствами
    let personalMovieDB = {
        count: filmsQuantity,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

// MAIN ENTER FUNCTIONS 
    function enterFilmsQuantity () {
        filmsQuantity = +prompt("How many films have u watched ?", "");
        if (filmsQuantity == "" || filmsQuantity < 0 || isNaN(filmsQuantity) || filmsQuantity == undefined)  {
            ifErrorFilmsQuantiy();
        }
        personalMovieDB.count = filmsQuantity;
    }

    function enterFilmsName () {
        filmsName = prompt("Enter film name", "");
        if (filmsName == "" || filmsName == null || filmsName == undefined || filmsName.length > 50) {
            ifErrorFilmsName();
        }
    }

    function enterFilmsMark () {
        filmsMark = +prompt("Enter films mark", "");
        if (filmsMark == "" || filmsMark < 0 || isNaN(filmsMark)) {
            ifErrorFilmsMark();
        }
    }

    function checkMyLevel () {
        if (filmsQuantity < 10 && filmsQuantity >= 0) {
            alert("Wathced films q-ty is too low");
        } else if (filmsQuantity >= 10 && filmsQuantity <= 30) {
            alert (" U are classic watcher");
        } else if (filmsQuantity > 30) {
            alert("U are KINOMAN");
        }
    }

    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Enter your favorite genre #${i}`); //можно сделать без переменной (будет быстрее)
            personalMovieDB.genres[i - 1] = genre;
        }
    }

    function showMyDB () {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    }
////////////////////////////////////

// IF ERROR FUNCTIONS
    function ifErrorFilmsQuantiy () {
        do {
            filmsQuantity = +prompt("Error, please enter again: How many films have u watched ?", "");
        } while (filmsQuantity == "" || filmsQuantity < 0 || isNaN(filmsQuantity) || filmsQuantity == undefined);
        personalMovieDB.count = filmsQuantity;
    }

    function ifErrorFilmsName () {
        do {
            filmsName = prompt("Error, please enter film name again", "");
        } while (filmsName == "" || filmsName == null || filmsName == undefined || filmsName.length > 50);
    }

    function ifErrorFilmsMark () {
        do {
            filmsMark = +prompt("Error, please enter its mark again", "");
        } while (filmsMark == "" || filmsMark < 0 || isNaN(filmsMark));
    }
////////////////////////////////////

enterFilmsQuantity();

    if (filmsQuantity < 10 && filmsQuantity >= 0) {
        alert("Wathced films q-ty is too low");
        start();
    } else if (filmsQuantity >= 10 && filmsQuantity <= 30) {
        alert (" U are classic watcher");
        start();
    } else if (filmsQuantity > 30) {
        alert("U are KINOMAN");
        start();
    }

// Cycle updating DB
    function start () {
        for (let i = 1; i <= filmsQuantity; i++) {
        enterFilmsName();
        enterFilmsMark();
        personalMovieDB.movies[filmsName] = filmsMark;
        }
    }
////////////////////////////////////

console.log(personalMovieDB);
showMyDB();
writeYourGenres ();

