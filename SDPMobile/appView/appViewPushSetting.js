///<reference path='/appView/appConstant.js' />

var appViewPushSetting = {

    initialize: function () {

        var sRole = appUtility.getLocal("PushNotificationRole");
        sRole = sRole.split(",");

        $("#appViewPushSettingDropDown").val(sRole).multiselect("refresh");

    },

    requestPushSetting: function () {

        var sRole = $("#appViewPushSettingDropDown").val();
        sRole = sRole.join(",");

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
    },

    responsePushSetting: function (sResponseJSON) {

        if (sResponseJSON.STATUS === "TRUE") {

            appUtility.showMessageGeneric("Push Notification Settings saved succesfully");

            var sRole = $("#appViewPushSettingDropDown").val();
            sRole = sRole.join(",");

            appUtility.setLocal("PushNotificationRole", sRole);
        }
    }

};