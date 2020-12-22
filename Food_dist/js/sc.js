
// Promise

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

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});




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