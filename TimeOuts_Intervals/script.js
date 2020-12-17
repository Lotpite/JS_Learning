//Moving
const btn = document.querySelector('.btn');

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



/* - Timeouts
const btn = document.querySelector('.btn');
let timerID,
    i = 0;


btn.addEventListener('click', () => {
    //const timderID1 = setTimeout(logger, 4000);
     timerID = setInterval(logger, 500);
});



// const timerID1 = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'dermo');


function logger () {
    if (i === 3) {
        clearInterval(timerID);
    }
    console.log('text');
    i++;
}

let id = setTimeout(function log() {
    console.log('draste');
    id = setTimeout(log, 500);
}, 500);
*/