'use strict';

/* Regular Expressions
new RegExp('pattern', 'flags'); //classic method

/pattern/f // pattern - шаблон того что мы ищем

*/

//  const ans = prompt('Enter ur name');

//  const reg = /\d/g; //flag i
//  console.log(ans.match(reg));


// // i - игнорирует регистр textCase 
// // g - несколько вхождений
// // m - многострочный режим (строки с переносами)
// Экранивование 
// // . - все символы
// // /\. - вернет точку
// \d - ищем цифры
// \D - ищем HE цифры
// \w - ищем буквы
// \W - ищем HE буквы
// \s - ищем пробелы

// console.log(ans.search(reg)); // вернет позицию первой буквы n
// console.log(ans.match(reg)); // вернет массив со свойствами

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

//console.log('12-13-44'.replace(/-/g, ':'));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // Вернет R2D2



/* Local Storage - lesson
localStorage.setItem('number', 5); //key = 'number' ; value = 5

//localStorage.getItem('number'); // get Value by key
console.log(localStorage.getItem('number'));

localStorage.removeItem('number'); // remove Key and Value

localStorage.clear(); // clear all storage


const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = '#fff';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializePersone = JSON.stringify(persone); 
localStorage.setItem('alex', serializePersone);
console.log(JSON.parse(serializePersone));
*/
