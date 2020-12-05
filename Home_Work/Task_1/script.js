"use strict";

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

// IF ERROR FILMS QUANTITY
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

function start () {
    for (let i = 1; i <= filmsQuantity; i++) {
     enterFilmsName();
     enterFilmsMark();
     personalMovieDB.movies[filmsName] = filmsMark;
    }
}
console.log(personalMovieDB);

