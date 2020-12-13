



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