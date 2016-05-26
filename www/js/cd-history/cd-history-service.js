cda.factory('cdHistory', function () {
    'use strict';
    var colorHistory = [],
        history = angular.element(document.querySelector('#history')),
        open = false,
        openHistory = function () {
            history.css('left', '0');
            open = true;
        },
        closeHistory = function () {
            history.css('left', '-190px');
            open = false;
        },
        historyButton = function () {
            if (!open) {
                openHistory();
            } else {
                closeHistory();
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
        history: getColorHistory,
        close: closeHistory
    };
});