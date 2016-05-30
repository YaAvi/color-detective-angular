angular.module('cda').factory('cdOpenImage', function ($cordovaCamera, cdImageSource) {
    'use strict';
    var DATA_URL = 0,
        options = {
            quality: 77,
            destinationType: DATA_URL,
            correctOrientation: true
        };
    function openImage(source) {
        options.sourceType = source;
        $cordovaCamera.getPicture(options).then(function (imageData) {
            cdImageSource.add("data:image/jpeg;base64," + imageData);
        }, function (err) {
            // error
        });
    }

    return {
        openImage: openImage
    };
});