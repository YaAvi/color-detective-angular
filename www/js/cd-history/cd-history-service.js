cda.factory('cdHistory', function () {
    'use strict';
    var colorHistory = [],
        history = angular.element(document.querySelector('#history')),
        clicked = false,
        historyButton = function () {
            if (!clicked) {
                history.css('left', '0');
                clicked = true;
            } else {
                history.css('left', '-190px');
                clicked = false;
            }
        },
        add = function (colorSample) {
            colorHistory.unshift(colorSample);
        },
        remove = function () {
            colorHistory.shift();
        },
        removeAll = function () {
            var len = colorHistory.length;
            for (var i = 0; i < len; i++) {
                colorHistory.pop();
            }
        },
        getColorHistory = function () {
            return colorHistory;
        };
    return {
        button: historyButton,
        add: add,
        remove: remove,
        removeAll: removeAll,
        history: getColorHistory
    };
});