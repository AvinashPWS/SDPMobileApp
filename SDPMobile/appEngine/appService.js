///<reference path='/appView/appConstant.js' />

var sHTTPVerb = "POST";
var sDataType = "json";
var sContentType = "application/json; charset=utf-8";
//var APP_SERVICE_URL = "http://localhost:64046/SDPAdmin/API/SDPMobileService.aspx/";
var APP_SERVICE_URL = "http://saidattanj.org/SDPAdmin/API/SDPMobileService.aspx/";
var APP_SITE_URL = "http://saidattanj.org";

sVersion = "1.0.0";

var appService = {

    invoke: function (sMethodName, sJSONData, sSuccessCallback, sErrorCallback) {
        var appServiceInvoke = new appServiceWrapper();
        appServiceInvoke.invoke(sMethodName, sJSONData, sSuccessCallback, sErrorCallback);
    }
};

function appServiceWrapper() {

    var appServiceClass = {

        sSuccessCallback: "",
        sErrorCallback: "",
        sSERVER_URL: "",
        sMethodName: "",
        sRequestJSONForServer: "",

        invoke: function (sMethodName, sJSONData, sSuccessCallback, sErrorCallback) {

            appUtility.showProgress();

            appServiceClass.sSERVER_URL = APP_SERVICE_URL;

            appServiceClass.sMethodName = sMethodName;
            appServiceClass.sRequestJSONForServer = sJSONData;
            appServiceClass.sSuccessCallback = sSuccessCallback;
            appServiceClass.sErrorCallback = sErrorCallback;

            $.ajax({

                url: appServiceClass.sSERVER_URL + appServiceClass.sMethodName,
                data: JSON.stringify(appServiceClass.sRequestJSONForServer),
                contentType: sContentType,
                dataType: sDataType,
                success: appServiceClass.appServiceSuccessCallback,
                error: appServiceClass.appServiceErrorCallback,

                async: true,
                context: this,
                type: 'POST',

                beforeSend: function (xhr) { },
                complete: function (jqXHR, textStatus) {
                    
                }
            });

        },

        appServiceSuccessCallback: function (sResponseJSON) {
            var sRequestJSON = appServiceClass.sRequestJSONForServer;
            appServiceClass.sSuccessCallback(sRequestJSON, sResponseJSON);
        },

        appServiceErrorCallback: function (sResponseJSON, sStatusCode, sErrorText) {
            var sRequestJSON = appServiceClass.sRequestJSONForServer;
            appServiceClass.sErrorCallback(sRequestJSON, sResponseJSON);
        }

    }

    return appServiceClass;
}
