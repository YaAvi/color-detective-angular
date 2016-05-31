angular.module('cda').factory('cdFontColor', function () {
    'use strict';
    function brightnessIsHigh(r, g, b) {
        return (((r * 299) + (g * 587) + (b * 114)) / 1000) > 200;
    }
    function get(r, g, b) {
        if (brightnessIsHigh(r, g, b)) {
            return 'rgb(40,40,40)';
        } else {
            return 'floralwhite';
        }
    }
    
    return {
        get: get
    };
});
