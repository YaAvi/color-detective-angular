cda.factory('cdZoom', function () {
    'use strict';
    var image = document.getElementById('camImage'),
        zoomLevel = 100,
        zoomOffset = 25;
    
    function zoomInHandle() {
        if (zoomLevel < 250) {
            zoomLevel += zoomOffset;
            image.style.width = zoomLevel + "%";
        }
    }
    function zoomOutHandle() {
        if (zoomLevel > 50) {
            zoomLevel -= zoomOffset;
            image.style.width = zoomLevel + "%";
        }
    }
    
    return {
        zoomIn: zoomInHandle,
        zoomOut: zoomOutHandle
    };
});