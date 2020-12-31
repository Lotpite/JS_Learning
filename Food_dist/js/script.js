//const { json } = require("express"); - САМО ПОЯВИЛОСЬ. ХЗ че это

window.addEventListener('DOMContentLoaded', () => {

const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    forms = require('./modules/forms'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    forms();
    cards();
    calc();
    slider();

});