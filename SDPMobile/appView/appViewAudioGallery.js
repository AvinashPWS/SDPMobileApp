///<reference path='/appView/appConstant.js' />

var appViewAudioGallery = {

    initialize: function () {
        appViewAudioGallery.requestAudio();
    },

    requestAudio: function () {

        appControllerGallery.requestAudio();
    },

    responseAudio: function (sResponseJSON) {
        //TBD 

        var sGallayTemplate = appEngine.getTemplate('#appViewAudioGalleryList');

        $("#appViewAudioGalleryList").html(sGallayTemplate(sResponseJSON));

        
    },

    getAudio: function (sAudioURL) {
       
        appPlayer.playPause();

        sAudioURL = sAudioURL.replace("~", APP_SITE_URL);

        appPlayer.playAudio(sAudioURL);
    }


};