cda.factory('cdUrl', function (cdImageSource) {
    'use strict';
    var urlInput = document.getElementById('url-input'),
        image = document.getElementById('camImage'),
        imageUrl = document.getElementById('image-url');
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }
    
    function urlHandle() {
        imageUrl.style.bottom = 0;
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
        imageUrl.style.bottom = -70 + 'px';
    }
    
    return {
        confirm: confirmUrl,
        openBox: urlHandle
    }
});