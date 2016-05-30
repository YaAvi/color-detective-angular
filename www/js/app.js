'use strict';

var cda = angular.module('cda', ['ngAnimate', 'ngCordova', 'mn']);
document.addEventListener('deviceready', function() {
    cda.value('TTS', TTS);
    angular.bootstrap(document, ['cda']);
}, false);