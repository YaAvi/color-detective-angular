function cdHeadCtrl(cdHistory, cdCurrentColor, cdImageSource) {
    this.historyButton = cdHistory.button;
    this.color = cdCurrentColor.getColor;
    this.next = cdImageSource.next;
    this.prev = cdImageSource.prev;
    this.getPrevButtonState = cdImageSource.getPrevButtonState;
    this.getNextButtonState = cdImageSource.getNextButtonState;
}
angular.module('cda').controller('cdHeadCtrl', cdHeadCtrl);
