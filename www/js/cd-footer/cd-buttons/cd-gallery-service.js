cda.factory('cdGallery', ['$rootScope', 'camera', 'cdImageSource', function ($rootScope, camera, cdImageSource) {
    'use strict';
    var DATA_URL = 0,
        PHOTOLIBRARY = 0,
        src,
        galleryOptions = {
            quality: 77,
            destinationType: DATA_URL,
            sourceType: PHOTOLIBRARY,
            correctOrientation: true
        };
    
    function galleryCallback(imageData) {
        src = "data:image/jpeg;base64," + imageData;
        cdImageSource.add(src);
        $rootScope.$apply();
    }

    function galleryError() {
        console.log('gallery canceled / unsuccusfull');
    }

    function openPhoto() {
        camera.getPicture(galleryCallback, galleryError, galleryOptions);
    }
    
    return {
        openGallery: openPhoto
    };
}]);