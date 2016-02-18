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

            var sDiv = $('<div></div>');
            var sH4 = $('<h4 class="text-center"></h4>').html(sMonth['EVENT_NAME']);
            var sAnchor = $('<a></a>').attr('href', 'javascript:appViewCalendarEvent.showBigCalenderImage("' + sMonth['EVENT_TARGET'] + '")')
            var sImg = $('<img>').attr('src', appUtility.getImagePath(sMonth['EVENT_ATTACHMENT']));
            $(sAnchor).html(sImg);
            $(sDiv).html(sH4).append(sAnchor);

            $("#appViewCalenderHinduList").append(sDiv);

        }

    },
    showBigCalenderImage: function (imagePath) {
        $("#appViewCalenderHinduBigImage").attr('src', imagePath);
        $("#appViewCalenderHinduList").hide();
        $("#appViewCalenderHinduBigImageSection").show();
    },
    hideBigCalenderImage:function (){
        $("#appViewCalenderHinduList").show();
        $("#appViewCalenderHinduBigImageSection").hide();
    }

};