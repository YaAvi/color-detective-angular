function cdTouch(cdHistory, cdDetectColor, cdCurrentColor, $cordovaStatusbar, $cordovaRecents, cdRgbToHex, cdFontColor) {
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
                    colorInHex = cdRgbToHex.rgbToHex((pColor[0] - 30 < 0) ? 0 : pColor[0] - 30,
                                                    (pColor[1] - 30 < 0) ? 0 : pColor[1] - 30,
                                                    (pColor[2] - 30 < 0) ? 0 : pColor[2] - 30),
                    color = {
                        r: pColor[0],
                        g: pColor[1],
                        b: pColor[2],
                        hex: colorInHex,
                        name: cdDetectColor.name(pColor[0], pColor[1], pColor[2]),
                        style: {
                            color: rgb,
                            font: cdFontColor.get(pColor[0], pColor[1], pColor[2])
                        }
                    };
                cdHistory.add(color);
                cdCurrentColor.setColor(color);
                $cordovaStatusbar.styleHex(color.hex);
                $cordovaRecents.setColor(color.hex);
            }
        };

    return {
        handle: touchHandler
    };
}
angular.module('cda').factory('cdTouch', cdTouch);
