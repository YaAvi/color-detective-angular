cda.factory('cdTouch', function (cdHistory, cdDetectColor, cdCurrentColor, statusbar, cdRgbToHex, cdFontColor) {
    'use strict';
    var image = document.getElementById('camImage'),
        mainColor = document.getElementById('color'),
        touchHandler = function (e) {
            var pColor,
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
                cdCurrentColor.set(color);
                statusbar.backgroundColorByHexString(cdRgbToHex.rgbToHex((color.r - 30 < 0) ? 0 : color.r - 30,
                                                                         (color.g - 30 < 0) ? 0 : color.g - 30,
                                                                         (color.b - 30 < 0) ? 0 : color.b - 30));
            }
        };

    return {
        handle: touchHandler
    };
});