function cdImageCtrl(cdTouch, cdImageSource, cdZoom) {
    'use strict';
    this.touchHandler = cdTouch.handle;
    this.src = cdImageSource.getSources;
    this.currentSrc = cdImageSource.getCurrent;
    this.width = cdZoom.getZoomLevel;
}
angular.module('cda').controller('cdImageCtrl', cdImageCtrl);