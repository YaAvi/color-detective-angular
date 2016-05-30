angular.module('cda').directive('cdHistoryBox', function () {
    'use strict';
    return {
        restrict: 'E',
        controller:'cdHistoryCtrl',
        controllerAs: 'history',
        templateUrl: 'js/cd-history/templates/cd-history-template.html',
        scope: {
            color: '='
        }
    };
});