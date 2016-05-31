
angular.module('cda').directive('cdFooter', function () {
    'use strict';
    return {
        restrict: 'E',
        controller: 'cdFooterCtrl',
        controllerAs: 'footer',
        templateUrl: 'js/cd-footer/cd-footer-template.html'
    };
});
