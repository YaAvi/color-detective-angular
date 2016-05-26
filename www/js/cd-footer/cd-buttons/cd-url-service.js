cda.factory('cdUrl', function (cdImageSource) {
    'use strict';
    var urlInput = document.getElementById('url-input'),
        imageUrl = document.getElementById('image-url');
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }
    
    function urlHandle() {
        imageUrl.className = 'open-url';
    }
    function closeUrl() {
        imageUrl.className = 'close-url';
    }
    function confirmUrl() {
        var url = urlInput.value;
        if (url) {
            if (checkURL(url) && url !== "") {
                cdImageSource.add(url);
            } else {
                window.alert("Not an image URL!");
            }
        }
        closeUrl();
    }
    
    return {
        confirm: confirmUrl,
        openBox: urlHandle,
        close: closeUrl
    };
});