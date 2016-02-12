///<reference path='/appView/appConstant.js' />

var appViewCalendarEvent = {
    initialize: function () {

        appViewCalendarEvent.requestCalendarEvents();

    },
    requestCalendarEvents: function () {

        appControllerEvent.requestCalendarEvents();
    },
    responseCalendarEvents: function (sResponseJSON) {
        for (var i in sResponseJSON) {
            var sMonth = sResponseJSON[i];

            var sDiv = $('<div class="col-md-6"></div>');
            var sH4 = $('<h4></h4>').html(sMonth['EVENT_NAME']);
            var sImg = $('<img>').attr('src', appUtility.getImagePath(sMonth['EVENT_ATTACHMENT']));
            $(sDiv).html(sH4).append(sImg);

            $("#sb-site").append(sDiv);

        }
        
//        $("#sb-site").css("height", $("body").height()+"px");

    }

};