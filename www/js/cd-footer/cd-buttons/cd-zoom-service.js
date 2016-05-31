angular.module('cda').factory('cdZoom', function () {
    'use strict';
    var zoomOutEnabled = true,
        zoomInEnabled = true,
        zoomLevel = 100,
        zoomOffset = 25;
    
    function zoomInHandle() {
        if (zoomLevel < 250) {
            zoomLevel += zoomOffset;
            zoomOutEnabled = true;
        }
        if (zoomLevel === 250) {
            zoomInEnabled = false;
        }
    }
    function zoomOutHandle() {
        if (zoomLevel > 50) {
            zoomLevel -= zoomOffset;
            zoomInEnabled = true;
        }
        if (zoomLevel === 50) {
            zoomOutEnabled = false;
        }
    }
    function zoomInState() {
        if (zoomInEnabled) {
            return 'enabled';
        }
        return 'disabled';
    }
    function zoomOutState() {
        if (zoomOutEnabled) {
            return 'enabled';
        }
        return 'disabled';
    }
    function getZoomLevel() {
        return zoomLevel + '%';
    }
    
    return {
        zoomIn: zoomInHandle,
        zoomOut: zoomOutHandle,
        zoomInState: zoomInState,
        zoomOutState: zoomOutState,
        getZoomLevel: getZoomLevel
    };
});
