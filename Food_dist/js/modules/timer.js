function timer() {

//Timer

const deadLine = '2021.01.25';

function getTimeRemaining(endTime) {
    const total = Date.parse(deadLine) - Date.parse(new Date()),
        days = Math.floor(total / (1000 * 60 * 60 * 24)),
        hours = Math.floor(total / (1000 * 60 * 60) % 24),
        minutes = Math.floor(total / (1000 * 60) % 60),
        seconds = Math.floor(total / 1000 % 60);

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function addZero(num) {
    if (num < 10 && num > 0) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const timeLeft = getTimeRemaining(endTime);

        days.innerHTML = addZero(timeLeft.days);
        hours.innerHTML = addZero(timeLeft.hours);
        minutes.innerHTML = addZero(timeLeft.minutes);
        seconds.innerHTML = addZero(timeLeft.seconds);

        if (timeLeft.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadLine);

}

module.exports = timer;