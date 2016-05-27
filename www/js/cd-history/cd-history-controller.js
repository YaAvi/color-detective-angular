function cdHistoryCtrl($scope, cdHistory) {
    'use strict';
    $scope.history = cdHistory.history();
    $scope.delOne = cdHistory.remove;
    $scope.delAll = cdHistory.removeAll;
}
cdHistoryCtrl.$inject = ['$scope', 'cdHistory'];
cda.controller('cdHistoryCtrl', cdHistoryCtrl);