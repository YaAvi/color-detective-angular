function cdTouch(cdHistory, cdDetectColor, cdCurrentColor, $cordovaStatusbar, cdRgbToHex, cdFontColor) {
    'use strict';
        var touchHandler = function (e) {
            var image = e.target,
                pColor,
                imageBounds = image.getBoundingClientRect(),
                xCord = e.coords.start.x,
                yCord = e.coords.start.y,
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height + imageBounds.top; // draw it in the same spot
            ctx.drawImage(image, 0, imageBounds.top, image.width, image.height);

            pColor = ctx.getImageData(xCord - imageBounds.left, yCord, 1, 1).data;
            if (pColor[3] !== 0) {
                var rgb = 'rgb(' + pColor[0] + ', ' + pColor[1] + ', ' + pColor[2] + ')',
                    color = {
                        r: pColor[0],
                        g: pColor[1],
                        b: pColor[2],
                        name: cdDetectColor.name(pColor[0], pColor[1], pColor[2]),
                        style: {
                            color: rgb,
                            font: cdFontColor.get(pColor[0], pColor[1], pColor[2])
                        }
                    };
                cdHistory.add(color);
                cdCurrentColor.setColor(color);
                
                $cordovaStatusbar.styleHex(cdRgbToHex.rgbToHex((color.r - 30 < 0) ? 0 : color.r - 30,
                                                                (color.g - 30 < 0) ? 0 : color.g - 30,
                                                                (color.b - 30 < 0) ? 0 : color.b - 30));
            }
        };

    return {
        handle: touchHandler
    };
}
angular.module('cda').factory('cdTouch', cdTouch);
