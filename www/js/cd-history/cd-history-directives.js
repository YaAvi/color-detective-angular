cda.directive('cdColorSample', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        template: '<div>' +
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