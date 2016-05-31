angular.module('cda').factory('cdDetectColor', function (clrData) {
    'use strict';
    var clsColor;
    function hexToRGB(hex, index) {
        var color = parseInt(hex.substring(index, index + 2), 16);
        return color;
    }
    
    function colorName(R, G, B) {
        var minDistance = 7777, distance, red, green, blue;
        for (var clr = 0; clr < clrData.length; clr++) { 
            red = hexToRGB(clrData[clr][0], 0);
            green = hexToRGB(clrData[clr][0], 2);
            blue = hexToRGB(clrData[clr][0], 4);
            distance = Math.pow((R - red), 2) + Math.pow((G - green), 2) + Math.pow((B - blue), 2);
            if (distance < minDistance) {
                minDistance = distance;
                clsColor = clr;
            }
        }
        return clrData[clsColor][1];
    }
    return {
        name: colorName
    };
});
