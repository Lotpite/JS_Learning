//Lesson 2 - 
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