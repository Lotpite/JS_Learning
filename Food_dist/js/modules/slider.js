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
export default slider;