///<reference path='/appView/appConstant.js' />
var appEngine = {

    initialize: function () {

        appEngine.appLoadEngineScript();
        appEngine.appViewInitialize();
        document.addEventListener("deviceready", appEngine.appDeviceReady, false);
        //appPlayer.playAudio('http://saidattanj.org/images/saibaba.mp3');
    },

    appViewInitialize: function () {

        appEngine.getHTML("appViewMenuTop.html", function (sResponseHTML) { $("#sb-top").html(sResponseHTML); });
        appEngine.getHTML("appViewMenuLeft.html", function (sResponseHTML) { $("#sb-left").html(sResponseHTML); });
        appEngine.getHTML("appViewMessage.html", function (sResponseHTML) { $("body").append(sResponseHTML); });

        $.slidebars();
    },

    appDeviceReady: function () {

        try {

            //cordova.exec(function (sDeviceToken) { alert(sDeviceToken); }, function (sDeviceTokenError) { alert(sDeviceTokenError); }, "DeviceToken", "deviceToken", ["DeviceToken"]);

            //alert("DEVICE READY");

            cordova.exec(function (sDeviceToken) {

                //alert(sDeviceToken);

                appUtility.setLocal("DeviceToken", sDeviceToken);

                var sRole = appUtility.getLocal("PushNotificationRole");

                if (sRole == "") {
                    sRole = "ALL";
                    appUtility.setLocal("PushNotificationRole", "ALL");
                }

                //SEND DEVICE TOKEN TO SERVER
                var sRequestJSON = {

                    sDeviceTokenJSON: appUtility.JSONToString({
                        ID: 0,
                        DEVICE_ID: appUtility.getLocal("DeviceToken"),
                        DEVICE_TYPE: (device.platform).toUpperCase(),
                        ROLE: sRole,
                        DATETIME: "1"
                    })
                };

                appControllerSeva.requestPushSetting(sRequestJSON);

            }, function (sDeviceTokenError) {

                //alert(sDeviceTokenError);

            }, "DeviceToken", "get", ["GetDeviceToken"]);

            document.addEventListener("backbutton", appPlayer.onBackKeyDown, false);
        }
        catch (e) {

        }
    },

    appBaseLoadScript: function (sScript) {

        $.ajax({
            url: sScript,
            dataType: 'script',
            success: function (s) { },
            async: false
        });
    },

    appLoadEngineScript: function () {

        var appScriptArray = [];

        appScriptArray.push("../appEngine/appEngine.js");
        appScriptArray.push("../appEngine/appPlayer.js");
        appScriptArray.push("../appEngine/appService.js");
        appScriptArray.push("../appEngine/appUtility.js");

        for (var i = 0; i < appScriptArray.length; i++) {
            appEngine.appBaseLoadScript(appScriptArray[i]);
        }

    },

    getHTML: function (sView, sCallback) {


        $.ajax({

            url: "../appViewUI/" + sView,
            type: "GET",
            success: function (responseHTML) {
                sCallback(responseHTML);
            },
            async: false
        });
    },
    getTemplate: function (templateID) {
        _.templateSettings.variable = "sTemplateJSON";
        return _.template(
                $(templateID + '-template').html()
                );
    }


}





