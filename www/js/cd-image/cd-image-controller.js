function cdImageCtrl($scope, cdTouch, cdImageSource) {
    'use strict';
    $scope.touchHandler = cdTouch.handle;
    $scope.src = cdImageSource.getSources;
    $scope.currentSrc = cdImageSource.getCurrent;
}
cdImageCtrl.$inject = ['$scope', 'cdTouch', 'cdImageSource'];
cda.controller('cdImageCtrl', cdImageCtrl);