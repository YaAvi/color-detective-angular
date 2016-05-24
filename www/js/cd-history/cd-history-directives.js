cda.directive('cdColorSample', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="color-sample" style="background-color:{{color.style.color}}; color:{{color.style.font}}">' +
                    '<div class="color-name">' +
                        '<p>{{color.name}}</p>' +
                    '</div>' +
                    '<div class="color-hex">({{color.r}}, {{color.g}}, {{color.b}})</div>' +
                '</div>',
        scope: {
            color: '='
        }
    };
});