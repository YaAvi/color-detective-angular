angular.module('cda').service('cdCurrentColor', function () {
    'use strict';
    var currentColor,
        get = function () {
            return currentColor;
        },
        set = function (color) {
            currentColor = color;
        };
    return {
        getColor: get,
        setColor: set
    };
});
