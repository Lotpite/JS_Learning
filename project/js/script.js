'use strict';

const movieDB = {
    movies: [
        "Веган",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// Сортировка фильмов 
movieDB.movies.sort();

const some = document.querySelector('.promo__adv'), // работает
      advImgs = some.getElementsByTagName('img'), // находит рисунки в some как обьект HTML Collection
      imgs = some.querySelectorAll('img'), // находит рисунки в виде массива Nodelist
      genre = document.querySelector('.promo__genre'),
      bgImg = document.querySelector('.promo__bg'),
      moviesList = document.querySelector('.promo__interactive-list'),
      moviesListLi = moviesList.getElementsByTagName('li');

// Присвоить новый динамический список и упорядочить по номерам
   for (let i = 0; i < moviesListLi.length; i++) {
       moviesListLi[i].childNodes[0].textContent = `${i+1}. ${movieDB.movies[i]}`;
   }

// Удалить рекламу от спонсоров (только рисунки)
    imgs.forEach(item => {
         item.remove();
     }); 

/* Удалить рекламный блок promo__adv
some.remove(); */

// Изменить текст жанра
genre.textContent = 'драма';

// Изменить рисунок
bgImg.style = 'background: url(../img/bgImg.jpg) center (center / cover) no-repeat';
