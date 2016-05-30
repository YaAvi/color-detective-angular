function cdHistoryCtrl(cdHistory) {
    'use strict';
    this.history = cdHistory.history();
    this.historyIsOpened = cdHistory.historyIsOpened;
    this.delOne = cdHistory.remove;
    this.delAll = cdHistory.removeAll;
    this.reverse = true;
}
angular.module('cda').controller('cdHistoryCtrl', cdHistoryCtrl);