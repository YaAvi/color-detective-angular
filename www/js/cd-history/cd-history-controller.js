function cdHistoryCtrl(cdHistory, cdCurrentColor) {
    'use strict';
    this.history = cdHistory.history();
    this.historyIsOpened = cdHistory.historyIsOpened;
    this.delOne = cdHistory.remove;
    this.delAll = cdHistory.removeAll;
    this.color = cdCurrentColor.getColor;
}
angular.module('cda').controller('cdHistoryCtrl', cdHistoryCtrl);
