///<reference path='/appView/appConstant.js' />

var appControllerEvent = {
    requestBannerEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_BANNER"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseBannerEvents, appControllerEvent.errorBannerEvents);
    },
    responseBannerEvents: function (sRequestJSON, sResponseJSON) {
        appViewIndex.responseBannerEvents(sResponseJSON);
    },
    errorBannerEvents: function (sRequestJSON, sResponseJSON) {
    },
    requestSponsorEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_SPONSOR"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseSponsorEvents, appControllerEvent.errorSponsorEvents);
    },
    responseSponsorEvents: function (sRequestJSON, sResponseJSON) {

        appViewIndex.responseSponsorEvents(sResponseJSON);
    },
    errorSponsorEvents: function (sRequestJSON, sResponseJSON) {
    },
    requestFlashEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_FLASH"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseFlashEvents, appControllerEvent.errorFlashEvents);
    },
    responseFlashEvents: function (sRequestJSON, sResponseJSON) {

        appViewIndex.responseFlashEvents(sResponseJSON);

    },
    errorFlashEvents: function (sRequestJSON, sResponseJSON) {
    },
    requestCalendarEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_CALENDAR"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseCalendarEvents, appControllerEvent.errorCalendarEvents);
    },
    responseCalendarEvents: function (sRequestJSON, sResponseJSON) {

        appViewCalendarEvent.responseCalendarEvents(sResponseJSON);

    },
    errorCalendarEvents: function (sRequestJSON, sResponseJSON) {
    },
    requestDailyEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_DAILY"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseDailyEvents, appControllerEvent.errorDailyEvents);
    },
    responseDailyEvents: function (sRequestJSON, sResponseJSON) {

        appViewDailyEvent.responseDailyEvents(sResponseJSON);

    },
    errorDailyEvents: function (sRequestJSON, sResponseJSON) {
    },
    requestRegularEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_REGULAR"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseRegularEvents, appControllerEvent.errorRegularEvents);
    },
    responseRegularEvents: function (sRequestJSON, sResponseJSON) {

        appViewRegularEvent.responseRegularEvents(sResponseJSON);

    },
    errorRegularEvents: function (sRequestJSON, sResponseJSON) {
    },
    requestUpcomingEvents: function () {

        var sRequestJSON = {
            sSP_Name: "EVENT_UPCOMING"
        };

        appService.invoke("GetData", sRequestJSON, appControllerEvent.responseUpcomingEvents, appControllerEvent.errorUpcomingEvents);
    },
    responseUpcomingEvents: function (sRequestJSON, sResponseJSON) {

        appViewUpcomingEvent.responseUpcomingEvents(sResponseJSON);

    },
    errorUpcomingEvents: function (sRequestJSON, sResponseJSON) {
    }

};