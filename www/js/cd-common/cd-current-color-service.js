cda.factory('cdCurrentColor', function () {
    'use strict';
    var currentColor = {name: 'Color', r: 119, g: 119, b: 119, style: {color: 'rgb(119, 119, 119)'}},
        get = function () {
            return currentColor;
        },
        set = function (color) {
            currentColor = color;
        };
    return {
        get: get,
        set: set
    };
});