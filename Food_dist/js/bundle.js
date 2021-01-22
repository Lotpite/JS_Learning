/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function calc() {

// Calculator

const result = document.querySelector('.calculating__result span');

let sex, height, weight, age, ratio;

// работа с localstorage запоминания выбраных данных
if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
} else { // Задаем стандартные переменные через localstorage
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
} else { // Задаем стандартные переменные через localstorage
    ratio = 1.375;
    localStorage.setItem('ratio', '1.375');
}

// Функция подсчета каллорий
function calcResult() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return; // return завершает выполнение функции
    }

    // Формула рассчета каллорий (fitseven)
    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

calcResult();

function initLocalSettings(selector, activeClass) {
const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.classList.remove(activeClass);
        if (element.getAttribute('id') === localStorage.getItem('sex')) {
            element.classList.add(activeClass);
        }
        if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            element.classList.add(activeClass);
        }
    });
}

initLocalSettings('#gender div', 'calculating__choose-item_active');
initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

// Функия получения информации с выбраного селектора(класса)
function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector); // Достает все Div из указанного селектора
    
    elements.forEach(elem => {
        elem.addEventListener('click', (event) => {
            if (event.target.getAttribute('data-ratio')) {
                ratio = +event.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +event.target.getAttribute('data-ratio'));
            } else {
                sex = event.target.getAttribute('id');
                localStorage.setItem('sex', event.target.getAttribute('id'));
            }
            console.log(sex, ratio);

        elements.forEach(elem => elem.classList.remove(activeClass));
        event.target.classList.add(activeClass);

        calcResult();
        });
    });
}

getStaticInformation('#gender div', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

// Функция считывания информации с текстовых полей
function getDynamicInformation (selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

        // Проверка на наличие неЦифр при вводе в поле input
        if(input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }
        
        switch(input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }

        calcResult();
    });
}

getDynamicInformation('#height');
getDynamicInformation('#weight');
getDynamicInformation('#age');
calcResult();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {

 // Classes in Menu card

    // Создаем класс конструктор карточки меню
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; //array
            this.parent = document.querySelector(parentSelector);
            this.course = 27.5;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.course;
        }

        // первращаем с помощью render в HTML
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        
            `;
            // Добавляем блок в конец родительского класса
            this.parent.append(element);
        }
    }

    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });

    // Create classes Menu Cards

    /* axios library request
    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
*/

 /* JSON request

 

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
        */

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {

// Forms

const forms = document.querySelectorAll(formSelector);

// создаем обьект с сообщениями (статуса реквеста)
const message = {
    loading: 'img/form/spinner.svg',
    success: 'success',
    failure: 'failure',
};

forms.forEach(form => {
    bindPostData(form);
});

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('img'); // создаем блок с сообщением
        statusMessage.src = message.loading; // добавляем класс к созданному блоку
        statusMessage.style.cssText = ` 
                display: block;
                margin: 0 auto;
            `;
        //statusMessage.textContent = message.loading; // добавляем отображаемый текст в блок
        // form.append(statusMessage); // Пушим созданный блок в конец form
        form.insertAdjacentElement('afterend', statusMessage);


        // создаем FormData которая будет содержать елементы формы
        const formData = new FormData(form),
            formDataObject = {}; // создаем пустой обьект который заполним датой из FormData

        // (formData to array, array to object) to JSON
        const jsonObject = JSON.stringify(Object.fromEntries(formData.entries()));


        (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', jsonObject)
            .then(data => {
                console.log(data);
                thanksModal(message.success);
                statusMessage.remove();
                form.reset();
            })
            .catch(() => { // catch если ошибка
                statusMessage.textContent = message.failure;
            });
    });
}

// Thanks modal
function thanksModal(message) {

    const previousModal = document.querySelector('.modal__dialog');
    previousModal.classList.add('hide');
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

    const newModalDialog = document.createElement('div');
    newModalDialog.classList.add('modal__dialog');
    newModalDialog.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

    document.querySelector('.modal').append(newModalDialog);

    setTimeout(() => {
        newModalDialog.remove();
        previousModal.classList.add('show');
        previousModal.classList.remove('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
    }, 4000);
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "openModal": () => /* binding */ openModal,
/* harmony export */   "closeModal": () => /* binding */ closeModal
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //блочит бэкграунд
    
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = ''; //анлочит бэкграунд
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    // Modal window
    const modal = document.querySelector(modalSelector),
     modalTrigger = document.querySelectorAll(triggerSelector);

  
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

//Slider - advanced method

const slides = document.querySelectorAll(slide), // все слайды
slider = document.querySelector(container), // общий блок Slider
next = document.querySelector(nextArrow), // кнока -->
prev = document.querySelector(prevArrow), // кнопка <--
current = document.querySelector(currentCounter), // номер текущего слайда
total = document.querySelector(totalCounter), // общее кол-во слайдов
slidesWrapper = document.querySelector(wrapper), // обертка 
slidesField = document.querySelector(field), // поле со слайдами
width = window.getComputedStyle(slidesWrapper).width; // сколько места занимает видимый блок

let slideIndex = 1; // index стартового слайда
let offset = 0; // отступ

// стартовый счетчик слайдов
if (slides.length < 10) {
total.textContent = `0${slides.length}`;
current.textContent = `0${slideIndex}`;
} else {
total.textContent = slides.length;
current.textContent = slideIndex;
}

// функция добавления 0 перед номером слайда
function checkSlideIndex() {
if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
} else {
    current.textContent = slideIndex;
}
}

// функция установки прозрачности для всех 'li' и для текущего "li"
function setDotOpacity() {
dots.forEach(dot => dot.style.opacity = '.5'); // устанавливаем прозрачность для каждой точки
dots[slideIndex - 1].style.opacity = 1; // устанавливаем прозрачность для даной точки
}

slidesField.style.width = 100 * slides.length + '%'; // шририна поля - 100% * количество слайдов + %
slidesField.style.display = 'flex'; // способность растягиваться
slidesField.style.transition = '0.5s all'; // сколрость перехода слайда

slidesWrapper.style.overflow = 'hidden'; // прячет непоместившиеся слайды 

// Каждому слайду - одинаковую ширину
slides.forEach(slide => {
slide.style.width = width;
});

// Абсолютная позициция для слайдера
slider.style.position = 'relative';

// создаем обертку для всех точек и стилизуем
const indicators = document.createElement('ol'), //ordered list
dots = [];
indicators.classList.add('carousel-indicators');
indicators.style.cssText = ` 
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`;
slider.append(indicators);

// создаем точки li и пушим в обертку Ol
for (let i = 0; i < slides.length; i++) {
const dot = document.createElement('li');
dot.setAttribute('data-slide-to', i + 1); // каждой точке пихаем атрибут с номером
dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
`;
// устанавливаем прозрачность для 1й точки
if (i == 0) {
    dot.style.opacity = 1;
}

indicators.append(dot); // пушим li в конец ol
dots.push(dot); // пушим в массив dots
}

function deleteNotDigits(str) {
// const parsed = parseInt(width);
return +str.replace(/\D/g, '');

}

next.addEventListener('click', () => {
if (offset == deleteNotDigits(width) * (slides.length - 1)) { //width = string'500px'
    offset = 0;
} else {
    offset += deleteNotDigits(width); // меняем offset на размер одного слайда в "+"
}

slidesField.style.transform = `translateX(-${offset}px)`; // двигает по оси Х translateX(offset)

if (slideIndex == slides.length) {
    slideIndex = 1;
} else {
    slideIndex++;
}

checkSlideIndex();
setDotOpacity();
});

prev.addEventListener('click', () => {
if (offset == 0) {
    offset = deleteNotDigits(width) * (slides.length - 1); // меняем offset на размер всех слайдов
} else {
    offset -= deleteNotDigits(width); // меняем offset на размер одного слайда в "-"
}

slidesField.style.transform = `translateX(-${offset}px)`; // двигает по оси Х translateX(offset)

if (slideIndex == 1) {
    slideIndex = slides.length;
} else {
    slideIndex--;
}

checkSlideIndex();
setDotOpacity();
});

// функция переключения слайдов при клике на точку "li"
dots.forEach(dot => {
dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to'); // SlideTo = порядковому номеру точки

    slideIndex = slideTo; // SlideIndex меняем на порядковый номер точки (SlideTo)
    offset = deleteNotDigits(width) * (slideTo - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;

    checkSlideIndex();
    setDotOpacity();
});
});

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, acitveClass) {

    /*Home Work #1 - Tabs
    - Скрыть неактуальный контент вкладок
    - Показать актуальный контент вкладок (по выбору)
    - добавили анимации с помощью classList 
    - Style.css - added (inline)
    .show{display:block}
    .hide{display:none}
    .fade{animation-name: fade; animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
*/
const tabParent = document.querySelector(tabsParentSelector),
tabs = document.querySelectorAll(tabsSelector),
tabcontent = document.querySelectorAll(tabsContentSelector);

function hideTabContent() {
tabcontent.forEach(item => {
    //item.style.display = 'none';
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
});
tabs.forEach(item => {
    item.classList.remove(acitveClass);
});
}

function showTabContent(i = 0) {
//tabcontent[i].style.display = 'block';
tabcontent[i].classList.add('show', 'fade');
tabcontent[i].classList.remove('hide');

tabs[i].classList.add(acitveClass);
}

tabs.forEach((item, i) => {
item.addEventListener('click', (event) => {
    hideTabContent();
    showTabContent(i);
});
});

tabParent.addEventListener('click', (event) => {
const target = event.target;

if (target && target.classList.contains(tabsSelector.slice(1))) {
    tabs.forEach((item, i) => {
        if (target == item) {

        }
    });
}

});

hideTabContent();
showTabContent();
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function timer(id, deadLine) {

//Timer

function getTimeRemaining(endTime) {
    const total = Date.parse(deadLine) - Date.parse(new Date()),
        days = Math.floor(total / (1000 * 60 * 60 * 24)),
        hours = Math.floor(total / (1000 * 60 * 60) % 24),
        minutes = Math.floor(total / (1000 * 60) % 60),
        seconds = Math.floor(total / 1000 % 60);

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function addZero(num) {
    if (num < 10 && num > 0) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const timeLeft = getTimeRemaining(endTime);

        days.innerHTML = addZero(timeLeft.days);
        hours.innerHTML = addZero(timeLeft.hours);
        minutes.innerHTML = addZero(timeLeft.minutes);
        seconds.innerHTML = addZero(timeLeft.seconds);

        if (timeLeft.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock(id, deadLine);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
//const { json } = require("express"); - САМО ПОЯВИЛОСЬ. ХЗ че это










window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 3000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)('.timer', '2021-04-30');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__.default)('form', modalTimerId);
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.default)();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '.offer__slider-counter #total',
        currentCounter: '.offer__slider-counter #current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => /* binding */ postData,
/* harmony export */   "getResource": () => /* binding */ getResource
/* harmony export */ });
const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });
    return await result.json();
};

async function getResource(url) {
    let result = await fetch(url);
    
    if (!result.ok) {
        throw new Error('Error');
    }      
    
    return await result.json(); 
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map