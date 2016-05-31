angular.module('cda').directive('cdImage', function () {
    'use strict';
    return {
        restrict: 'E',
        controller: 'cdImageCtrl',
        controllerAs: 'image',
        templateUrl: 'js/cd-image/cd-image-template.html'
    };
});
