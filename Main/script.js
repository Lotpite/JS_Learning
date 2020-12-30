
/*Lesson 17 - Exercises on INTERVIEW

"use strict";

// let x = 5; alert(x++); // даст 5. возвращает сначала 5
// let x = 5; alert(++x); // даст 6. возвращает сначала 6

// [] + false - null + true // 
// console.log(typeof([] + false)); // "false"
// console.log(typeof([] + false - null + true)); // NaN

// let y = 1; let x = y = 2; alert(x); // 2 последовательное присваивание

// console.log([] + 1 + 2); // "12"

// alert("1"[0]); // 1

// console.log(2 && 1 && null && 0 && undefined); // null. && запинается на False 

// console.log(!!(a && b) === (a && b)); // false

// alert ( null  || 2 && 3 || 4); // 3 // || запинается на true

// const a = [1, 2, 3]; a == b - false
// const b = [1, 2, 3];

// alert ( +"Infinity"); // Infinity
// alert ( +"infinity"); // NaN

// console.log("Ezhyk" > "Yabloko"); // False (look to UNICODE)
             f   f   2 T   
// console.log(0 || "" || 2 || undefined || true || false); // 2 код остановился на true и дальше не пошел
*/

/*Lesson 16 - Dynamic typization

"use strict";

//to string
console.log(typeof(5 + '')); // конкатинация
console.log(typeof(null + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

//to number
console.log(typeof(Number('4')));

console.log(typeof(+'54'));

console.log(typeof(parseInt("15px", 10)));

//let answ = +prompt("Hello", "");

//to boolean

//0, '', null, undefined, NaN; - always FALSE

let switcher = null;

if (switcher) {
    console.log('Working');
}

switcher =  1;
if (switcher) {
    console.log('Working');
}

console.log(typeof(Boolean('4'))); // boolean

console.log(typeof(!!"44444")); // boolean
*/

/*Lesson 15 - Catch problems

"use strict";

debugger; // делает брейк поинт в коде
*/

/* Lesson 14 - OOP / PrototypeOP

"use strict";

let str = "some";
//let strObj = new String(str); // old method

// console.log(typeof(str)); 
// console.log(typeof(strObj));

//console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100
};

//john.__proto__ = soldier; // Старый метод прототипа


Object.setPrototypeOf(john, soldier); // новый метод
console.log(john);
john.sayHello();

const andrew = Object.create(soldier);
console.log(andrew.health, andrew.armor);
andrew.sayHello();

const victor = Object.create(soldier);
console.log(`Victor armor is: ${victor.armor}`);
*/


/*Lesson 13 - link, Spread

"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copyr = obj; // передается ссылка на obj

copy.a = 10; // модифицируется сам обьект а не copyr
console.log(copyr);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone= Object.assign({}, add);

clone.d = 20;
console.log(clone);
console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Asdasd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newArraya = [...array];

console.log(newArraya);

const objNew = {
    one: 1,
    two: 2
};

const newobjNew = {...objNew};

console.log(newobjNew);
*/


/*Lesson 12 - Arrays / Psevdo-Arrays

"use strict";

const arr = [1, 2, 3, 6, 8];

arr.pop(); // удаляет последние елементы из массива

console.log(arr);

arr.push(13); // добавляет елемент в конец массива

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
}

for (let value of arr) {
    console.log(value);
}
console.log ("/////////////////");

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products);
console.log(products.join('; '));

function compareNum(a, b) {
    return a - b;
}

products.sort(compareNum);
alert(products);
*/

/*Lesson 11 - Objects / Object methods
"use strict";

//const obj = new Object();

const options = {
    name: 'Test',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Draste");
    }
};

// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let inKey in options[key]) {
            console.log(`Parametrs ${inKey}, have value ${options[key][inKey]}`);
            //counter++;
        }
    } else {
        console.log(`Paramets ${key}, have value ${options[key]}`);
        //counter++;
    }
}

//console.log(counter);

//onsole.log(Object.keys(options).length);

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
*/

// for (let key of options) { // не переббирает обьекты
//     console.log(`Paramets ${key}, have value ${options[key]}`);
// }


/*Lesson 10 - Callback functions
"use strict";

    function first() {
        // Do something
        setTimeout(function () {
            console.log(1);
        }, 500);
    }

    function second() {
        console.log(2);
    }

    first();
    second();

    function learnJS(lang, callback) {
        console.log(`I learn: ${lang}`);
        callback();
    }

    function done() {
        console.log('I PASS this lesson');
    }

    learnJS('JavaScript', done);
*/


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