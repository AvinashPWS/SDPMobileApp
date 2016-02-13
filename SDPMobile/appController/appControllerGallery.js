///<reference path='/appView/appConstant.js' />

var appControllerGallery = {

    requestImages: function () {

        var sRequestJSON = {

            sSP_Name: "LIST_IMAGES"
        };

        appService.invoke("GetData", sRequestJSON, appControllerGallery.responseImages, appControllerGallery.errorImages)
    },

    responseImages: function (sRequestJSON, sResponseJSON) {

        appViewImageGallery.responseImages(sResponseJSON);

    },

    errorImages: function (sRequestJSON, sResponseJSON) { },

    requestVideos: function () {

        var sRequestJSON = {

            sSP_Name: "LIST_VIDEOS"
        };

        appService.invoke("GetData", sRequestJSON, appControllerGallery.responseVideos, appControllerGallery.errorVideos)
    },

    responseVideos: function (sRequestJSON, sResponseJSON) {

        appViewVideoGallery.responseVideos(sResponseJSON);

    },

    errorVideos: function (sRequestJSON, sResponseJSON) { },

    requestQuotes: function () {

        var sRequestJSON = {

            sSP_Name: "LIST_QUOTES"
        };

        appService.invoke("GetData", sRequestJSON, appControllerGallery.responseQuotes, appControllerGallery.errorQuotes)
    },

    responseQuotes: function (sRequestJSON, sResponseJSON) {

        appViewIndex.responseQuotes(sResponseJSON);

    },

    errorQuotes: function (sRequestJSON, sResponseJSON) { },

    requestAudio: function () {

        var sRequestJSON = {

            sSP_Name: "LIST_AUDIO"
        };

        appService.invoke("GetData", sRequestJSON, appControllerGallery.responseAudio, appControllerGallery.errorAudio)
    },

    responseAudio: function (sRequestJSON, sResponseJSON) {

        appViewAudioGallery.responseAudio(sResponseJSON);

    },

    errorAudio: function (sRequestJSON, sResponseJSON) { },

};