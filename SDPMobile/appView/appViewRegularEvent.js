///<reference path='/appView/appConstant.js' />

var appViewRegularEvent = {
    initialize: function () {

        appViewRegularEvent.requestRegularEvents();

        $(".regular-events").css("min-height", appUtility.setHeight(1) + "px");
    },
    requestRegularEvents: function () {

        appControllerEvent.requestRegularEvents();
    },
    responseRegularEvents: function (sResponseJSON) {

        for (var i in sResponseJSON) {
            var sEvent = sResponseJSON[i];
            var sBTag = $('<b></b>').html(sEvent['EVENT_DATETIME']);
            var sPTag = $('<p></p>').html(sEvent['EVENT_NAME']);
            var sLiTag = $('<li></li>').html(sBTag).append(sPTag).append($('<br>'));
            $("#appViewRegularEventList").append(sLiTag);
        }

    }

};