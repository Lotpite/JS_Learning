"use strict";

// Сколько фильмов вы посмотрели
const filmsQuantity = +prompt("How many films have u watched", "");

// Создать обьект со свойствами

let personalMovieDB = {
    count: filmsQuantity,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   lastFilm1 = prompt("Last film u watched", ""),
        markOfLastFilm1 = +prompt("Ur mark", ""),
        lastFilm2 = prompt("Last film u watched", ""),
        markofLastFilm2 = +prompt("Ur mark", "");

personalMovieDB.movies[lastFilm1] = markOfLastFilm1;
personalMovieDB.movies[lastFilm2] = markofLastFilm2;
 console.log(personalMovieDB);