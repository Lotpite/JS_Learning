// const deadLine = '2020.12.15',
//       now = new Date();




// let timeLeft = Date.parse(deadLine) - Date.parse(now);
// console.log(timeLeft);
// let days = Math.floor((timeLeft / ( 1000 * 60 * 60 * 24)));
// let hours = Math.floor((timeLeft / ( 1000 * 60 ) % 60));6
// let minutes = Math.floor((timeLeft /  1000) % 60);
// console.log(days);
// console.log(hours);
// console.log(minutes);



/* Date 
"use strict";

const now = new Date('2020-05-01');
//new Date.parse('2020-05-01');

// console.log(now.setHours(21, 40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++)  {
    let some = i ** 3;
}

let end = new Date();

alert(`Cicle worked for ${end - start} ms`);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

*/

/* ClassList
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// Первая кнопка имеет 2 класса Buton clas = "some blue"

// console.log(btns[0].classList.item(0)); // вернет blue
// console.log(btns[0].classList.item(1)); // вернет Some
//console.log(btns[1].classList.add('red', 'green'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red exists');
// }

btns[1].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('hi');
    }
});



// btns.forEach (btn => {
//     btn.addEventListener('click', () => {
//         console.log('gello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
*/