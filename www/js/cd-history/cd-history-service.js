cda.factory('cdHistory', ['$rootScope', function ($rootScope) {
    'use strict';
    var colorHistory = [],
        history = document.querySelector('#history'),
        open = false,
        openHistory = function () {
            history.className = 'open-history';
            open = true;
        },
        closeHistory = function () {
            history.className = 'close-history';
            open = false;
        },
        historyButton = function () {
            if (!open) {
                openHistory();
            } else {
                closeHistory();
            }
        },
        colorExist = function (colorSample) {
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
            var index = colorExist(colorSample);
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
        };
    return {
        button: historyButton,
        add: add,
        remove: remove,
        removeAll: removeAll,
        history: getColorHistory,
        close: closeHistory
    };
}]);