//Lesson 10 - Functions on practice
"use strict";



/*Lesson 9 - Methods and string/number settings
"use strict";

const str = "test";
const arr = [1, 2, 5];

console.log(str.length);
console.log(arr.length);

console.log(str[2]);
console.log(str.toUpperCase());

const fruit = "sweetty fruit";
console.log(fruit.indexOf("fruit")); // находит с какого индекса начинается искомое слово
console.log(fruit.indexOf("q")); // возвращает -1 если буква не найдена

const logg = "hello wor";

console.log(logg.slice(0, 4)); // 0, 4(4 не включается) - диапазон для вырезания

console.log(logg.substring(0, 4));

console.log(logg.substr(0, 4)); // 4 - количество символов

const kokosh = 12.6;
console.log(Math.round(kokosh));

const test1 = "12.9px";
console.log(parseInt(test1));
console.log(parseFloat(test1));
*/

/*Lesson 8 - Functions
"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 13;
}

showFirstMessage("Hello world");
console.log(num);

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(10, 20));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); 

// Function works only after code before it
const logger = function() {
    console.log("gooten tag");
};

logger();

// Futuristic Function ;-) (without this)
const calc = (a, b) => a + b;
*/

/*Lesson 7 - Cycles
"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for(let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log("Step by", i);
}
*/

/*Lesson 6 - IF/ESLE/Ternar op/Switch
"use strict";

if (4 == 5) {
    console.log('Ok!');
} else {
    console.log('Nok!');
}

const num = 49;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Norm');
}

(num === 50) ? console.log('Ok!') : console.log('Nok!');

switch (num) {
    case 49:
        console.log('To low');
        break;
    case 100:
        console.log('too much');
        break;
    case 50:
        console.log('V tochku');
        break;
    default: // если кейса не срабатывает то
        console.log('no again');
        break;
}
*/

/*Lesson 5
"use strict";

let PreFixIncrement = 10,
PreFixDecrement = 10,
PostfFixIncrement = 10,
PostfFixDecrement = 10;

console.log(PostfFixIncrement++);
console.log(PostfFixDecrement--);

console.log(++PreFixIncrement);
console.log(--PreFixDecrement);

console.log(4%4); //% - остаток от деления

console.log(2*4 == 9); // == -оператор сравнения
console.log(2 == "2") // == - простое равенство

console.log(2 === "2") // === - строгое равенство

// && и
// ||  или

const isChecked = false,
      isClosed = false;

      console.log(isChecked || isClosed);
*/

/* Lesson 4
"use strict";

const category = 'toys';

console.log(`https://url.com/${category}`); // `` - дают возможность добавлять в строку

const user = "Andrew";

alert(`Привет, ${user}`);
*/

/* Lesson 3
"use strict";

//alert('Hello man');

//const result = confirm('Are u here?');
//console.log(result);

//const answer = prompt("Are you 18?", "YES"); //+ делает string to number
//console.log(answer);

const answers = [];

 answers[0] = prompt('Your name?', "");
 answers[1] = prompt('Your age?', "");
 answers[2] = prompt('Your sex?', "");

console.log(typeof(answers));
*/

/*Lesson 2 Objects
"use strict";

let anumber = 4.6;

console.log(-4/0); // infinity/-infinity
console.log('string'*9); //NaN

const person = `Andrey`;
console.log(person);

const bool = true;

//console.log(something); //reference error NULL

let und;
console.log(und); //undefined

const obj = {
    name: "Andrew",
    age: 29,
    isMarried: false
};

//console.log(obj.age);
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);
*/

/* Lesson 1
"use strict"; // говорим скрипту что работаем в современном режиме
a 
let anumber = 5; //let(изменяемая) - коробочка
const leftBorderWidth = 1; //cons(неменяемая)

anumber = 10;
console.log(anumber);

const obj = { // прямых констант в ЖС не бывает
    a: 50
};

obj.a = 11;

console.log(obj);

var name ='Andrey';
*/