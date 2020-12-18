/* Class

"use strict";

// Абстракция отделения шаблона(концепции) от экземпляра, созданого на основе концепции
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// const square = new Rectangle(10, 10),
//     long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// Наследование (иерархия)

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width); // всегда идет первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hi world', 'red');

div.showMyProps();
console.log(div.calcArea());
*/

/* This . Call Context

"use strict";

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a : 20,
//     b : 15,
//     sum: function() {
//         function shout() {
//         console.log(this);
//     }
//     shout();
// }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`hi ${this.name}`);
//     };
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num; // creates new Function

// }

// const double = count.bind(2);
// console.log(double(4));

//1) Обычная функция: this = window, но если стоит "use strict" - undefined
//2) Контекст у методов обьекта - сам обьект
//3) this в конструкторах и классах - это новый экземпляр обьекта
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() { //работает если нестрелочная функция
    console.log(this);
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // возвращает обьект obj
        };

        say();
    }
};

obj.sayNumber();

const double = (a) => a * 2;
console.log(double(5));
*/

/* Constructors
"use strict";

// const num = new Number(3); // старье
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hi ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} gone`);
};

const andrew = new User('Andrew', 1),
    alex = new User('Alex', 2);

alex.exit();

andrew.hello();
alex.hello();
*/

/*  Dates
const deadLine = '2020.12.15',
//       now = new Date();




// let timeLeft = Date.parse(deadLine) - Date.parse(now);
// console.log(timeLeft);
// let days = Math.floor((timeLeft / ( 1000 * 60 * 60 * 24)));
// let hours = Math.floor((timeLeft / ( 1000 * 60 ) % 60));6
// let minutes = Math.floor((timeLeft /  1000) % 60);
// console.log(days);
// console.log(hours);
/* console.log(minutes);



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