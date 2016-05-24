cda.factory('cdImageSource', function () {
    'use strict';
    var sources = ['img/portrait.png'],
        current = 0,
        prevButton = document.getElementById('prev-button'),
        nextButton = document.getElementById('next-button');

    function disable(button) {
        button.style.pointerEvents = "none";
        button.style.color = "#777";
    }

    function enable(button) {
        button.style.pointerEvents = "auto";
        button.style.color = "floralwhite";
    }
    function add(src) {
        if (sources.indexOf(src) < 0) {
            sources.push(src);
        }
        current = sources.indexOf(src);
        disable(nextButton);
        enable(prevButton);
    }
    function getSources() {
        return sources;
    }
    function getCurrent() {
        return current;
    }
    function next() {
        if (current < sources.length - 1) {
            current += 1;
            enable(prevButton);
        }
        if (current === sources.length - 1) {
            disable(nextButton);
        }
    }
    function prev() {
        if (current > 0) {
            enable(nextButton);
            current -= 1;
        }
        if (current === 0) {
            disable(prevButton);
        }
    }
    disable(nextButton);
    disable(prevButton);
    
    return {
        add: add,
        getSources: getSources,
        getCurrent: getCurrent,
        next: next,
        prev: prev
    };
});