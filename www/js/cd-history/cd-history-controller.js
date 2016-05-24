cda.controller('cdHistoryCtrl', function ($scope, cdHistory) {
    'use strict';
    $scope.history = cdHistory.history();
    $scope.delOne = cdHistory.remove;
    $scope.delAll = cdHistory.removeAll;
});