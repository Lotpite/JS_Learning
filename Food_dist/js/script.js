//const { json } = require("express"); - САМО ПОЯВИЛОСЬ. ХЗ че это

window.addEventListener('DOMContentLoaded', () => {


    /*Home Work #1 - Tabs
    - Скрыть неактуальный контент вкладок
    - Показать актуальный контент вкладок (по выбору)
    - добавили анимации с помощью classList 
    - Style.css - added (inline)
    .show{display:block}
    .hide{display:none}
    .fade{animation-name: fade; animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
*/
    const tabParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabcontent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabcontent.forEach(item => {
            //item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        //tabcontent[i].style.display = 'block';
        tabcontent[i].classList.add('show', 'fade');
        tabcontent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    }

    tabs.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            hideTabContent();
            showTabContent(i);
        });
    });

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {

                }
            });
        }

    });

    hideTabContent();
    showTabContent();

    //Timer

    const deadLine = '2020.12.27';

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

    setClock('.timer', deadLine);

    // Modal window

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    // modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; //блочит бэкграунд
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = ''; //анлочит бэкграунд
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal();
        });
    });

    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


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

    // Create classes Menu Cards

    // axios library request
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

    /* JSON request

 const getResource = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error('Error');
        } else {
            return await result.json();
        }
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
        */

    // Forms

    const forms = document.querySelectorAll('form');

    // создаем обьект с сообщениями (статуса реквеста)
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'success',
        failure: 'failure',
    };

    forms.forEach(form => {
        bindPostData(form);
    });

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


            postData('http://localhost:3000/requests', jsonObject)
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
        openModal();

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
            closeModal();
        }, 4000);
    }

    //Slider - advanced method

    const slides = document.querySelectorAll('.offer__slide'), // все слайды
        slider = document.querySelector('.offer__slider'), // общий блок Slider
        next = document.querySelector('.offer__slider-next'), // кнока -->
        prev = document.querySelector('.offer__slider-prev'), // кнопка <--
        current = document.querySelector('.offer__slider-counter #current'), // номер текущего слайда
        total = document.querySelector('.offer__slider-counter #total'), // общее кол-во слайдов
        slidesWrapper = document.querySelector('.offer__slider-wrapper'), // обертка 
        slidesField = document.querySelector('.offer__slider-inner'), // поле со слайдами
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


});