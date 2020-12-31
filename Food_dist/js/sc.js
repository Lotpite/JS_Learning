// Incapsulation - defend from user
'use strict';

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`User name: ${this.name}, age: ${userAge}`);

//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Nedopuistiomoe zhanechenie');
//         }
//     };

// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// //console.log(ivan.userAge); // недоступна снаружи - undefined
// console.log(ivan.getAge());



// ivan.setAge(100);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

class User {

    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`User name: ${this.name}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Nedopuistiomoe zhanechenie');
        }
    }

}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);

ivan.say();

/* Getters and Setters
'use strict';

const persone = {
    name: 'Alex',
    age: 25,

get userAge() {
    return this.age;
},

set userAge(number) {
    this.age = number;
}

};

console.log(persone.userAge = 30);
console.log(persone.userAge);
*/

/* Objects simplify

 objArray.forEach(object => {
        const kokos = new MenuCard(object.img, object.altimg, object.title,
  перенос строки object.descr, object.price, '.menu .container').render();
        console.log(kokos);
      }));

      EQUAL 

objArray => result.forEach(({img, altimg, title, descr, price}) => {
        const kokos = new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        console.log(kokos);
      }));

*/


/* Arrays sorting

'use strict';

//forEach - просто перебирает массив

// filter
const names = ['Alexa', 'Ivan', 'Anna', 'Volodymyr'];
const shortNames = names.filter(function(name) {
    return name.length < 5;
});
console.log(shortNames);


// map
const answers = ['IvaN', 'AnNa', 'HELLO', 'go'];
const result = answers.map(item => item.toLowerCase());
console.log(result);

every/some - true, false
const arr = [4, 'qsa', 'darova'];
console.log(arr.some(item => typeof(item) === "number")); // если один
console.log(arr.every(item => typeof(item) === "number")); // если каждый

reduce - собирать массив в целое

const arr = [4, 5, 1, 3, 2, 6];
                        // 0     4
                        // 4     5
                        // 9     1
                        // 10    3
                        // 13    2
                        // 15    6
const result = arr.reduce((sum, current) => sum + current //,3 - set default);
console.log(result);

const arr = ['apple', 'pear', 'plum', 'orange'];
const result = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(result);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animanl'
};

const newArr = Object.entries(obj) // формирует массив с массивами из обьекта
.filter(item => item[1] === 'persone') // массив с массивами with 'persone
.map(item => item[0]); // массив из массива with 'persone' но уже без 'personse'
console.log(newArr);
*/


/* Promise

'use strict';

// console.log('Request data...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     }).then(data => {
//         data.modify = true;
//         return data;

//     }).then(data => {
//         console.log(data);
//     });
// }).catch(() => {
//     console.error('error hepens');
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(1000).then(() => console.log('2000 ms'));

// Выполняется после всех Promise 
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// Выполняется как только пройдет самый первый Promise отработал 
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
*/


/* Rest arrays
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);
*/


/* создаем запрос XMLHttpRequest
const request = new XMLHttpRequest();

// формируем запрос (что, куда)
request.open('POST', 'server.php');

// устанавливает заголовок запроса (уточняет детали)
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

// создаем FormData которая будет содержать елементы формы
const formData = new FormData(form),
    formDataObject = {}; // создаем пустой обьект который заполним датой из FormData

 // конвертируем обьект в читабельный для JSON
const dataToSend = JSON.stringify(formDataObject);

// Отправляем запрос сконвертированый обьект
request.send(dataToSend);

// Отправляем запрос сконвертированый обьект
request.send(dataToSend);

// Отслжеиваем статус реквеста 
request.addEventListener('load', () => {
    if (request.status === 200) {
        thanksModal(message.success);
        statusMessage.remove();
        form.reset();
    } else {
        thanksModal(message.failure);
    }
});

    */

/*  Server.php
         function postData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.textContent = message.loading;
                form.append(statusMessage);

                const request = new XMLHttpRequest();
                request.open('POST', 'server.php');

                //request.setRequestHeader('Content-type', 'multipart/form-data');
                // Заголовок не нужен между обьектом formData
                const formData = new FormData(form);

                request.send(formData);

                request.addEventListener('load', () => {
                    if (request.status === 200) {
                        console.log(request.response);
                        statusMessage.textContent = message.success;
                        form.reset();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 1000);
                    } else {
                        statusMessage.textContent = message.failure;
                    }
                });
            });
        } 
        */

/* AJAX
'use strict';



/* JSON 
'use strict';

const persone = {
    name: 'Alex',
    tel: '+38095',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
*/