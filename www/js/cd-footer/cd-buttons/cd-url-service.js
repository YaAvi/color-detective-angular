angular.module('cda').factory('cdUrl', function (cdImageSource) {
    'use strict';
    var urlBoxOpen = false;
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }
    
    function urlHandle() {
        urlBoxOpen = true;
    }
    function closeUrl() {
        urlBoxOpen = false;
    }
    function confirmUrl(url) {
        if (url) {
            if (checkURL(url) && url !== "") {
                cdImageSource.add(url);
            } else {
                window.alert("Not an image URL!");
            }
        }
        closeUrl();
    }
    function getUrlBoxState() {
        if (urlBoxOpen) {
            return 'open-url';
        }
        return 'close-url';
    }
    return {
        confirm: confirmUrl,
        getUrlBoxState: getUrlBoxState,
        openBox: urlHandle,
        close: closeUrl
    };
});