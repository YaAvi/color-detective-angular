'use strict';

var cda = angular.module('cda', ['ngAnimate', 'mn']);
document.addEventListener('deviceready', function() {
    cda.value('statusbar', StatusBar);
    cda.value('camera', navigator.camera);
    cda.value('TTS', TTS);
    angular.bootstrap(document, ['cda']);
}, false);