
// Метод из урока
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

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
      moveiList = document.querySelector('.promo__interactive-list');
console.log(adv);

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage =  'url("img/bg.jpg")';

moveiList.innerHTML = "";

movieDB.movies.sort();


movieDB.movies.forEach((film, i) => {
    moveiList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
             <div class="delete"></div>
        </li>
    `;
});

// // Сортировка фильмов 
// movieDB.movies.sort();

// const some = document.querySelector('.promo__adv'), // работает
//       advImgs = some.getElementsByTagName('img'), // находит рисунки в some как обьект HTML Collection
//       imgs = some.querySelectorAll('img'), // находит рисунки в виде массива Nodelist
//       genre = document.querySelector('.promo__genre'),
//       bgImg = document.querySelector('.promo__bg'),
//       moviesList = document.querySelector('.promo__interactive-list'),
//       moviesListLi = moviesList.getElementsByTagName('li');

// // Присвоить новый динамический список и упорядочить по номерам
//    for (let i = 0; i < moviesListLi.length; i++) {
//        moviesListLi[i].childNodes[0].textContent = `${i+1}. ${movieDB.movies[i]}`;
//    }

// // Удалить рекламу от спонсоров (только рисунки)
//     imgs.forEach(item => {
//          item.remove();
//      }); 

// /* Удалить рекламный блок promo__adv
// some.remove(); */

// // Изменить текст жанра
// genre.textContent = 'драма';

// // Изменить рисунок
// bgImg.style = 'background: url(../img/bgImg.jpg) center (center / cover) no-repeat';