///<reference path='/appView/appConstant.js' />

var appViewSthalaSeva = {

    initialize: function () {

        $("#appViewSthalaSevaAbout").show();
        $("#appViewSthalaSevaFAQ").hide();
        $("#appViewSthalaSevaMedia").hide();
        $("#appViewSthalaSevaPlayScreen").hide();

        appViewSthalaSeva.requestFAQs();
        appViewSthalaSeva.requestSthalaSevaMedia();
    },

    requestFAQs: function () {

        appControllerSeva.requestFAQs();
    },

    responseFAQs: function (sResponseJSON) {

        var sSevaTemplate = appEngine.getTemplate('#appViewSthalaSevaFAQList');

        $("#appViewSthalaSevaFAQList").html(sSevaTemplate(sResponseJSON));

        accordi.init();

    },

    requestSthalaSevaMedia: function () {

        appControllerSeva.requestSthalaSevaMedia();
    },

    responseSthalaSevaMedia: function (sResponseJSON) {

        var sSevaTemplate = appEngine.getTemplate('#appViewSthalaSevaMediaList');

        $("#appViewSthalaSevaMediaList").html(sSevaTemplate(sResponseJSON));

    },

    backToVideoList: function () {

        appPlayer.playPause();

        $("#sb-site").show();

        $("#appViewSthalaSevaPlayScreen").hide();

        $("#appViewSthalaSevaiFrame").removeAttr("src");

    },

    playVideo: function (sVideoId) {

        appPlayer.playPause();

        $("#appViewSthalaSevaiFrame").attr("src", "http://www.youtube.com/embed/" + sVideoId);

        $("#sb-site").hide();

        $("#appViewSthalaSevaPlayScreen").show();
    },

    getYoutubeThumbnail: function (sVideoId) {
        return 'http://img.youtube.com/vi/' + sVideoId + '/default.jpg';
    },

    toggleButtons: function (sButtonID) {

        $("#appViewSthalaSevaAbout").hide();
        $("#appViewSthalaSevaFAQ").hide();
        $("#appViewSthalaSevaMedia").hide();

        switch (sButtonID) {

            case "appViewSthalaSevaAboutButton":
                $("#appViewSthalaSevaAbout").show();
                break;

            case "appViewSthalaSevaFAQButton":
                $("#appViewSthalaSevaFAQ").show();
                break;

            case "appViewSthalaSevaMediaButton":
                $("#appViewSthalaSevaMedia").show();
                break;
        }
    }

};