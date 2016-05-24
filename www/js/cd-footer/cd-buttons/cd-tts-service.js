cda.factory('cdTTS', function (TTS) {
    'use strict';
    function speakColor(colorName) {
        TTS.speak({
            text: colorName,
            local: 'en-GB',
            rate: 0.8
        }, function () {
            console.log('tts has spoken');
        }, function (reason) {
            console.log(reason);
        });
    }
    
    return {
        speakColor: speakColor
    };
});