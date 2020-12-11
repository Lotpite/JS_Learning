//Lesson 6 - Event on mobile

//touchstart - срабатывает при касание к елементу
//touchmove - при каждом смещении пальца срабатывает
//touchend - как только оторвался палец
//touchenter - нажал вскользь
//touchleave - ушел за пределы елемента
//touchcancel - когда палец больше не регистрируется на екране 

 
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
        console.log(e.target);
    });

    box.addEventListener('touchmove', (e) =>{
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) =>{
        e.preventDefault();

        console.log('end');
    });

    // touches - выдает список пальцев на екране
    // target - выдает список пальце на елементе
    // changedTouches - список пальцев учавствовали в событии



/* Lesson 5 - Travelling by DOM
//console.log(document.body);
//console.log(document.head);
//console.log(document.documentElement);

//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes){
    if(node.nodeName == '#text') {
        continue;
    }
    console.log(node);
} */

/* Lesson 3 - Events
"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

//let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.onclick  = function() {  GAVNO GAVNO
//     alert('Kick');
// };

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     //console.log('Kick');
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach (btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});
*/


/* Lesson 2 - Change html from javascript
"use strict";

const  box = document.getElementById('box'),
       btns = document.getElementsByTagName('button'),
       circles = document.getElementsByClassName('circle'),
       wrapper = document.querySelector('.wrapper'),
       hearts = wrapper.querySelectorAll('.heart'),
       oneHeart = wrapper.querySelector('.heart');
       

box.style.backgroundColor = 'blue';
box.style.width = '330px';
const num = '500px';

box.style.cssText = `background-color: pink; width: ${num}`;

btns[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text = document.createTextNode('Test');

div.classList.add('black');

//document.body.append(div);
 wrapper.append(div); // вставить в конец
//div.innerHTML = "Hello world";
div.innerHTML = "<h1>Hello world</h1>"; // можно создавать новую структуру
//div.textContent = "Hi"; // работает только с текстом

// div.insertAdjacentHTML('beforeend', '<h2>Dobrij den</h2>');

// wrapper.prepend(div); // вставить в начало
//hearts[0].after(div);

//circles[1].remove();

//hearts[2].replaceWith(circles[2]);

//OLD constructions
//wrapper.appendChild(div);
//wrapper.insertBefore(div, hearts[1]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0], hearts[0]);
*/



/*Lesson 1 - How to get Element 

'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); //get array
//btns = document.getElementsByTagName('button')[1]; - get button[1] 
console.log(btns);
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
*/