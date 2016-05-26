cda.controller('cdBackButton', function (cdUrl, cdHistory) {
    'use strict';
    // Handle the back button
    function onBackKeyDown() {
        cdUrl.close();
        cdHistory.close();
    }
    // device APIs are available
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener('backbutton', onBackKeyDown, false);
    }
    angular.element(document).ready(function () {
        document.addEventListener('deviceready', onDeviceReady, false);
    });
});