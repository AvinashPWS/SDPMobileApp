///<reference path='/appView/appConstant.js' />

var appViewIndex = {
    initialize: function () {

        appViewIndex.requestFlashEvents();
        appViewIndex.requestSponsorEvents();
        appViewIndex.requestBannerEvents();
        appViewIndex.requestQuotes();

        var sRole = appUtility.getLocal("PushNotificationRole");
        if (sRole == "") {
            appUtility.setLocal("PushNotificationRole", "ALL");
        }
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

            var sLi = $('<li></li>').attr("onclick", "window.open('" + appUtility.getImagePath(sBanner['EVENT_TARGET']) + "', '_blank', 'location=no,closebuttoncaption=Back')");

            $(sLi).html('<img src="' + appUtility.getImagePath(sBanner['EVENT_ATTACHMENT']) + '">' +
                    '<div class="text-content">' + sBanner['EVENT_NAME'] + '</div>');

            $("#appViewIndexBannerSlide").append(sLi);
        }
        $('.flexslider').flexslider({
            animation: "slide"
        });

    },
    requestSponsorEvents: function () {
        appControllerEvent.requestSponsorEvents();
    },
    responseSponsorEvents: function (sResponseJSON) {
        //TBD
        $("#TodaySponsorMarquee h2").html('');
        for (var i in sResponseJSON) {
            var sFlashNews = sResponseJSON[i];
            var sPtag = $("<span></span>").html(" &#42; " + sFlashNews['EVENT_NAME']);
            $("#TodaySponsorMarquee h2").append(sPtag);
        }
    },
    requestFlashEvents: function () {
        appControllerEvent.requestFlashEvents();
    },
    responseFlashEvents: function (sResponseJSON) {
        //TBD
        for (var i in sResponseJSON) {
            var sFlashNews = sResponseJSON[i];
            var sPtag = $("<span></span>").html(" &#42; " + sFlashNews['EVENT_NAME']);
            $("#FlashNewsMarquee").append(sPtag);
        }
    },
    requestQuotes: function () {
        appControllerGallery.requestQuotes();
    },
    responseQuotes: function (sResponseJSON) {
        //TBD
    }

};