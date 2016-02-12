///<reference path='/appView/appConstant.js' />

var appViewDailyEvent = {
    initialize: function () {

        appViewDailyEvent.requestDailyEvents();

        $(".daily-events").css("min-height", appUtility.setHeight(1) + "px");
        
    },
    requestDailyEvents: function () {

        appControllerEvent.requestDailyEvents();
    },
    responseDailyEvents: function (sResponseJSON) {

        for (var i in sResponseJSON) {
            var sEvent = sResponseJSON[i];
            var sBTag = $('<b></b>').html(sEvent['EVENT_DATETIME']);
            var sPTag = $('<p></p>').html(sEvent['EVENT_NAME']);
            var sLiTag = $('<li></li>').html(sBTag).append(sPTag).append($('<br>'));
            $("#appViewDailyEventList").append(sLiTag);
        }

    }

};