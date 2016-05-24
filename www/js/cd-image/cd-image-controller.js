cda.controller('cdImageCtrl', function ($scope, cdTouch, cdImageSource) {
    'use strict';
    $scope.touchHandler = cdTouch.handle;
    $scope.src = cdImageSource.getSources;
    $scope.currentSrc = cdImageSource.getCurrent;
});