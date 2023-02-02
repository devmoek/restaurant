window.addEventListener("DOMContentLoaded", () => {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms');

    tabs();
    modal();
    timer();
    cards();
    slider();
    calc();
    forms();
});