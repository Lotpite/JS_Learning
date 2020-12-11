// Метод из урока
'use strict';

let movieDB = {
    movies: [
        "Веган",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), //рекламный блок с рисунками
      poster = document.querySelector('.promo__bg'), // класс отвечающий за титул
      genre = poster.querySelector('.promo__genre'), // класс отвечающий за жанр на титуле promo__bg
      moviesList = document.querySelector('.promo__interactive-list'), // список фильмов
      btnAdd = document.querySelector('.add button'), // Кнопка "Подтвердить"
      textField = document.querySelector('.add input'), // Текстовое поле для ввода названия фильма
      chBox = document.querySelector('.add input[type=checkbox]'); // Checkbox из класса add "Добавляем любимый фильм"

//Создаем проверку чекбокса "добавляем любимый фильм"
const makeFilmFavorite = (event) => {
    if(chBox.checked) {
        console.log('Adding favorite film');
    } else {
        console.log('Adding common film');
    }
};

// Создаем считыватель состояния чекбокса "добавляем любимый фильм"
chBox.addEventListener('click', makeFilmFavorite);

// Создаем функцию удаления фильма
const deleteFilm = (event) => {
    event.target.parentNode.remove();
    let itemList = document.querySelector('.promo__interactive-list');
    let items = itemList.querySelectorAll('li');
    movieDB.movies = [];
    for (let i = 0; i < items.length; i++) {
        movieDB.movies.push(items[i].innerText.split('.')[1]);
    }
    movieDB.movies.sort();
    createNewFilmList();
};
// Создать событие присваивания значения введеного в текстовое поле
const enterNewFilmName = (event) => {
    textField.inputValue = event.target.value;
};

//Создать считыватель значения введеного в текстовое поле
textField.addEventListener('input', enterNewFilmName);

// Создать событие для кнопки "Потдвердить"
const addNewFilm = (event) => {
    event.preventDefault(); // Запрещает перезагружать страницу после нажатия на кнопку
    let filmName = textField.inputValue;
    if(filmName != "" && filmName != undefined && filmName != null) {
        if (filmName.length > 21) {
            filmName = `${textField.inputValue.slice(0, 21)}...`;
            movieDB.movies.push(filmName);
        } else {
            movieDB.movies.push(filmName);
            createNewFilmList();
        }
    } else {
        alert("Please enter correct film name");
    }
};

// Создать считыватель событий на кнопке "Подтвердить" методом клика
btnAdd.addEventListener('click', addNewFilm);

// Удалить рекламу
adv.forEach(item => {
    item.remove();
});

// изменить жанр фильма на титуле     
genre.textContent = 'драма'; 

// изменить фоновый рисунок
poster.style.backgroundImage = 'url("img/bg.jpg")'; 

//............................. Начало функции создания нового списка фильмов    
function createNewFilmList() { 

//удалить текущий список фильмов 
moviesList.innerHTML = ""; 

// отсортировать список фильмов по алфавиту
movieDB.movies.sort();

//Создать новый список фильмов
movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}.${film}
        <div class="delete"></div>
    </li>
    `;
    // Для каждого списка <li> создаем функцию для кнопки "Удалить" хранящегося в блоке <div>
    let btnDell = document.querySelectorAll('.delete'); // класс отвечающий за кнопку "удалить фильм"
    btnDell.forEach((btn, i) => {
        btn.addEventListener('click', deleteFilm);
    });
});
}
//............................. Конец функции создания нового списка фильмов  

createNewFilmList();