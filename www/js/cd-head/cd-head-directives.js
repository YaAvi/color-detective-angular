angular.module('cda').directive('cdHead', function () {
    'use strict';
    return {
        restrict: 'E',
        controller: 'cdHeadCtrl',
        controllerAs: 'head',
        templateUrl: 'js/cd-head/templates/cd-head-template.html'
    };
});
