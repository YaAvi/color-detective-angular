function cdHeadCtrl($scope, cdHistory, cdCurrentColor, cdImageSource) {
    'use strict';
    $scope.historyButton = cdHistory.button;
    $scope.color = cdCurrentColor.get;
    $scope.next = cdImageSource.next;
    $scope.prev = cdImageSource.prev;
    $scope.first = cdImageSource.first;
    $scope.last = cdImageSource.last;
}
cdHeadCtrl.$inject = ['$scope', 'cdHistory', 'cdCurrentColor', 'cdImageSource'];
cda.controller('cdHeadCtrl', cdHeadCtrl);