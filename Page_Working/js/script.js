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