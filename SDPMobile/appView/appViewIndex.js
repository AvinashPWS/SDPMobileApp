///<reference path='/appView/appConstant.js' />

var appViewIndex = {
    initialize: function () {

        appViewIndex.requestFlashEvents();
        appViewIndex.requestSponsorEvents();
        appViewIndex.requestBannerEvents();
        appViewIndex.requestQuotes();

    },
    requestBannerEvents: function () {
        appControllerEvent.requestBannerEvents();
    },
    responseBannerEvents: function (sResponseJSON) {
        //TBD
        appViewIndex.bindBanner(sResponseJSON);

    },
    bindBanner: function (sResponseJSON) {

        for (var i in sResponseJSON) {
            var sBanner = sResponseJSON[i];

            var sLi = $('<li></li>').attr("onclick", "window.open('" + sBanner['EVENT_TARGET'] + "', '_system', 'location=yes')");

            $(sLi).html('<img src="' + appUtility.getImagePath(sBanner['EVENT_ATTACHMENT']) + '">' +
                    '<div class="text-content">' + sBanner['EVENT_NAME'] + '</div>');

            $("#appViewIndexBannerSlide").append(sLi);
        }
        $('.flexslider').flexslider({
            animation: "slide"
        });

        $.slidebars();

    },
    requestSponsorEvents: function () {
        appControllerEvent.requestSponsorEvents();
    },
    responseSponsorEvents: function (sResponseJSON) {
        //TBD
        for(var i in sResponseJSON){
            var sFlashNews = sResponseJSON[i];
            var sPtag = $("<span></span>").html(" &#42; " + sFlashNews['EVENT_NAME'] +", ");
            $("#TodaySponsorMarquee h2").append(sPtag);
        }
    },
    requestFlashEvents: function () {
        appControllerEvent.requestFlashEvents();
    },
    responseFlashEvents: function (sResponseJSON) {
        //TBD
//        for(var i in sResponseJSON){
//            var sFlashNews = sResponseJSON[i];
//            var sPtag = $("<span></span>").html(" &#42; " + sFlashNews['EVENT_NAME'] +", ");
//            $("#FlashNewsMarquee").append(sPtag);
//        }
    },
    requestQuotes: function () {
        appControllerGallery.requestQuotes();
    },
    responseQuotes: function (sResponseJSON) {
        //TBD
    }

};