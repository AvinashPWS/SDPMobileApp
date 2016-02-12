///<reference path='/appView/appConstant.js' />

var appViewVideoGallery = {

    initialize: function () {

        appViewVideoGallery.requestVideos();
        $("#appViewVideoPlayScreen").hide();
    },

    requestVideos: function () {

        appControllerGallery.requestVideos();
    },
    responseVideos: function (sResponseJSON) {
       
        var groupedsResponseJSON = _.groupBy(sResponseJSON, function (o) {
            return o.VIDEO_HEADER
        });

        var sGalleryTemplate = appEngine.getTemplate('#appViewVideoGalleryList');

        $("#appViewVideoGalleryList").html(sGalleryTemplate(groupedsResponseJSON));

        accordi.init();

    },

    backToVideoList: function () {

        $("#sb-site").show();

        $("#appViewVideoPlayScreen").hide();
        
        $("#appViewVideoiFrame").removeAttr("src");

    },
    playVideo: function (sVideoId) {

        $("#appViewVideoiFrame").attr("src", "http://www.youtube.com/embed/" + sVideoId);

        $("#sb-site").hide();

        $("#appViewVideoPlayScreen").show();
    },
    getYoutubeThumbnail: function (sVideoId) {
        return 'http://img.youtube.com/vi/' + sVideoId + '/default.jpg';
    }

};