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

        for (var i in sResponseJSON) {
            var sEvent = sResponseJSON[i];
            var sBTag = $('<b></b>').html(sEvent['EVENT_DATETIME']);
            var sPTag = $('<p></p>').html(sEvent['EVENT_NAME']);
            var sLiTag = $('<li></li>').html(sBTag).append(sPTag).append($('<br>'));
            $("#appViewUpcomingEventList").append(sLiTag);
        }
    }

};