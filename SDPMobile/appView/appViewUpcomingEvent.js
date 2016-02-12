///<reference path='/appView/appConstant.js' />

var appViewUpcomingEvent = {
    initialize: function () {

        appViewUpcomingEvent.requestUpcomingEvents();

        $(".upcoming-events").css("min-height", appUtility.setHeight(1) + "px");
        
    },
    requestUpcomingEvents: function () {

        appControllerEvent.requestUpcomingEvents();
    },
    responseUpcomingEvents: function (sResponseJSON) {


    }

};