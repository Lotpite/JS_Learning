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

export default calc;