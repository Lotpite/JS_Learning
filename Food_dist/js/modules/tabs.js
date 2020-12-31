function tabs() {

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
    
}

module.exports = tabs;