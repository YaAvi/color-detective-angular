cda.factory('cdDetectColor', function (clrData) {
    'use strict';
    var clsColor;
    // Hex to RGB
    function hexToR(h) {return parseInt(h.substring(0, 2), 16); } // R
    function hexToG(h) {return parseInt(h.substring(2, 4), 16); } // G
    function hexToB(h) {return parseInt(h.substring(4, 6), 16); } // B
    
    function colorName(R, G, B) {
        var minSum = 7777, sum, red, green, blue;
        for (var clr = 0; clr < clrData.length; clr++) { 
            red = hexToR(clrData[clr][0]);
            green = hexToG(clrData[clr][0]);
            blue = hexToB(clrData[clr][0]);
            sum = Math.pow((R - red), 2) + Math.pow((G - green), 2) + Math.pow((B - blue), 2);
            if (sum < minSum) {
                minSum = sum;
                clsColor = clr;
            }
        }
        return clrData[clsColor][1];
    }
    return {
        name: colorName
    };
});