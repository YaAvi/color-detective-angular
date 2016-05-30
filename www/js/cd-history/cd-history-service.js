angular.module('cda').factory('cdHistory', function () {
    'use strict';
    var colorHistory = [],
        open = false,
        closeHistory = function () {
            open = false;
        },
        historyButton = function () {
            open = !open;
        },
        indexOfColor = function (colorSample) {
            for (var i = 0; i < colorHistory.length; i++) {
                if (colorSample.style.color === colorHistory[i].style.color) {
                    return i;
                }
            }
            return -1;
        },
        add = function (colorSample) {
            var index = indexOfColor(colorSample);
            if (index >= 0) {
                var color = colorHistory.splice(index, 1)[0];
                colorHistory.push(color);
            } else {
                colorHistory.push(colorSample);
            }
        },
        remove = function () {
            colorHistory.pop();
        },
        removeAll = function () {
            var len = colorHistory.length;
            for (var i = 0; i < len; i++) {
                remove();
            }
        },
        getColorHistory = function () {
            return colorHistory;
        },
        isOpen = function () {
            if (open) {
                return 'open-history'
            }
            return 'close-history';
        };
    return {
        button: historyButton,
        add: add,
        remove: remove,
        removeAll: removeAll,
        history: getColorHistory,
        close: closeHistory,
        historyIsOpened: isOpen
    };
});