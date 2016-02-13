///<reference path='/appView/appConstant.js' />
var sMedia = null;

var appPlayer = {

    initialize: function () {

        try {
            $("#appViewIndexMusicImage").attr("src", "../appEngine/appCore/img/pause.png");
        }
        catch (e) {
        }

        appPlayer.playPause();

    },

    onBackKeyDown: function () {

        if (sMedia) {
            sMedia.pause();
            sMedia = null;
        }

        navigator.app.exitApp();
    },

    playAudio: function (sAudioURL) {

        // Play the audio file at url
        //sMedia = new Audio('http://saidattanj.org/images/saibaba.mp3');

        sMedia = new Audio(sAudioURL);

        // Play audio
        sMedia.play();
        $("#appViewIndexMusicImage").attr("src", "../appEngine/appCore/img/pause.png");
    },

    playPause: function () {

        try {
            if (sMedia == null) {
                appPlayer.playAudio();
                $("#appViewIndexMusicImage").attr("src", "../appEngine/appCore/img/pause.png");
            }
            else {
                sMedia.pause();
                sMedia = null;
                $("#appViewIndexMusicImage").attr("src", "../appEngine/appCore/img/music.png");
            }
        }
        catch (e) {
        }
    }
}