angular.module('cda').factory('cdRgbToHex', function () {
    function colorToHex(color) {
        var colorHex = color.toString(16);
        if (colorHex.length === 1) {
            colorHex = "0" + colorHex;
        }
        return colorHex;
    }

    function rgbToHex(r, g, b) {
        return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
    }
    
    return {
        rgbToHex: rgbToHex
    };
});
