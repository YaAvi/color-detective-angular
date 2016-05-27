cda.factory('cdCamera', ['$rootScope', 'camera', 'cdImageSource', function ($rootScope, camera, cdImageSource) {
    'use strict';
    var DATA_URL = 0,
        src,
        cameraOptions = {
            quality: 77,
            destinationType: DATA_URL,
            correctOrientation: true
        };
    
    function cameraCallback(imageData) {
        src = "data:image/jpeg;base64," + imageData;
        cdImageSource.add(src);
        $rootScope.$apply();
    }

    function cameraError() {
        console.log('Camera canceled / unsuccusfull');
    }

    function capturePhoto() {
        camera.getPicture(cameraCallback, cameraError, cameraOptions);
    }
    
    return {
        capture: capturePhoto
    };
}]);