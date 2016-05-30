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
            if (colorHistory.length > 0) {
                for (var i = 0; i < colorHistory.length; i++) {
                    if (colorSample.style.color === colorHistory[i].style.color) {
                        return i;
                    }
                }
                return -1;
            }
            return -1;
        },
        add = function (colorSample) {
            var index = indexOfColor(colorSample);
            if (index >= 0) {
                var color = colorHistory.splice(index, 1)[0];
                colorHistory.unshift(color);
            } else {
                colorHistory.unshift(colorSample);
            }
        },
        remove = function () {
            colorHistory.shift();
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