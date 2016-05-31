angular.module('cda').directive('cdApp', function () {
    'use strict';
    return {
        restrict: 'E',
        controller: 'cdBackButton',
        templateUrl: 'js/cd-app-template.html'
    };
});
