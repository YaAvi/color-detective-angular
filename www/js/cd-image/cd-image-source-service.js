angular.module('cda').factory('cdImageSource', function () {
    'use strict';
    var sources = ['img/portrait.png'],
        current = 0;
    function add(src) {
        if (sources.indexOf(src) < 0) {
            sources.push(src);
        }
        current = sources.indexOf(src);
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
        }
        if (current === sources.length - 1) {
        }
    }
    function prev() {
        if (current > 0) {
            current -= 1;
        }
        if (current === 0) {
        }
    }
    function getNextButtonState() {
        if (current === sources.length -1) {
            return 'disabled';
        }
        return 'enabled';
    }
    function getPrevButtonState() {
        if (current === 0) {
            return 'disabled';
        }
        return 'enabled';
    }
    return {
        add: add,
        getSources: getSources,
        getCurrent: getCurrent,
        next: next,
        prev: prev,
        getNextButtonState: getNextButtonState,
        getPrevButtonState: getPrevButtonState
    };
});