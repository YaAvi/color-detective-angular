'use strict';
angular.module('cda', ['ngAnimate', 'ngCordova', 'pascalprecht.translate', 'mn']);
document.addEventListener('deviceready', function() {
    angular.module('cda').value('TTS', TTS);
    angular.bootstrap(document, ['cda']);
}, false);
