angular.module('cda').factory('cdUrl', function (cdImageSource) {
    'use strict';
    var urlBoxIsOpen = false;
    function urlIsValid(url) {
        return (url.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null && url !== "");
    }
    
    function urlHandle() {
        urlBoxIsOpen = true;
    }
    function closeUrl() {
        urlBoxIsOpen = false;
    }
    function confirmUrl(url) {
        if (url) {
            if (urlIsValid(url)) {
                cdImageSource.add(url);
            } else {
                window.alert("Not an image URL!");
            }
        }
        closeUrl();
    }
    function isUrlBoxOpen() {
        return urlBoxIsOpen;
    }
    return {
        confirm: confirmUrl,
        isUrlBoxOpen: isUrlBoxOpen,
        openBox: urlHandle,
        close: closeUrl
    };
});
