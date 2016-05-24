cda.factory('cdFontColor', function () {
    'use strict';
    function get(r, g, b) {
        // brightness check
        if ((((r * 299) + (g * 587) + (b * 114)) / 1000) > 200) {
            return 'rgb(40,40,40)';
        } else {
            return 'floralwhite';
        }
    }
    
    return {
        get: get
    };
});