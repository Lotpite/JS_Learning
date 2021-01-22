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

export default tabs;