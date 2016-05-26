cda.factory('cdZoom', function () {
    'use strict';
    var image = document.getElementById('camImage'),
        zoomOut = document.getElementById('zoom-out-button'),
        zoomIn = document.getElementById('zoom-in-button'),
        zoomLevel = 100,
        zoomOffset = 25;
    
    function zoomInHandle() {
        if (zoomLevel < 250) {
            zoomLevel += zoomOffset;
            image.style.width = zoomLevel + "%";
            zoomOut.className = "enabled button";
        }
        if (zoomLevel === 250) {
            zoomIn.className = "disabled button";
        }
    }
    function zoomOutHandle() {
        if (zoomLevel > 50) {
            zoomLevel -= zoomOffset;
            image.style.width = zoomLevel + "%";
            zoomIn.className = "enabled button";
        }
        if (zoomLevel === 50) {
            zoomOut.className = "disabled button";
        }
    }
    
    return {
        zoomIn: zoomInHandle,
        zoomOut: zoomOutHandle
    };
});