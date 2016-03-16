///<reference path='/appView/appConstant.js' />

var appViewAnnadanam = {

    initialize: function () {

        $("#appViewAnnadanamAbout").show();
        $("#appViewAnnadanamMedia").hide();
        $("#appViewAnnadanamPlayScreen").hide();

        appViewAnnadanam.requestAnnadanamMedia();
    },

    requestAnnadanamMedia: function () {

        appControllerSeva.requestAnnadanamMedia();
    },

    responseAnnadanamMedia: function (sResponseJSON) {

        var sSevaTemplate = appEngine.getTemplate('#appViewAnnadanamMediaList');

        $("#appViewAnnadanamMediaList").html(sSevaTemplate(sResponseJSON));

    },

    backToVideoList: function () {

        appPlayer.playPause();

        $("#sb-site").show();

        $("#appViewAnnadanamPlayScreen").hide();

        $("#appViewAnnadanamiFrame").removeAttr("src");

    },

    playVideo: function (sVideoId) {

        appPlayer.playPause();

        $("#appViewAnnadanamiFrame").attr("src", "http://www.youtube.com/embed/" + sVideoId);

        $("#sb-site").hide();

        $("#appViewAnnadanamPlayScreen").show();
    },

    getYoutubeThumbnail: function (sVideoId) {
        return 'http://img.youtube.com/vi/' + sVideoId + '/default.jpg';
    },

    toggleButtons: function (sButtonID) {

        $("#appViewAnnadanamAbout").hide();
        $("#appViewAnnadanamMedia").hide();

        switch (sButtonID) {

            case "appViewAnnadanamAboutButton":
                $("#appViewAnnadanamAbout").show();
                break;

            case "appViewAnnadanamMediaButton":
                $("#appViewAnnadanamMedia").show();
                break;
        }
    },
    
    submitDonation:function (){
        appUtility.payPalPost("#appViewAnnadanampaypalform");
    }

};