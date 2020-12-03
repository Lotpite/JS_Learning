//Lesson 5
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

/*Lesson 2
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