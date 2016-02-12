///<reference path='/appView/appConstant.js' />

var appControllerSeva = {

    requestFAQs: function () {

        var sRequestJSON = {

            sSP_Name: "SEVA_STHALA_FAQ"
        };

        appService.invoke("GetData", sRequestJSON, appControllerSeva.responseFAQs, appControllerSeva.errorFAQs)
    },

    responseFAQs: function (sRequestJSON, sResponseJSON) {

        appViewSthalaSeva.responseFAQs(sResponseJSON);

    },

    errorFAQs: function (sRequestJSON, sResponseJSON) { },


    requestSthalaSevaMedia: function () {

        var sRequestJSON = {

            sSP_Name: "SEVA_STHALA_MEDIA"
        };

        appService.invoke("GetData", sRequestJSON, appControllerSeva.responseSthalaSevaMedia, appControllerSeva.errorSthalaSevaMedia)
    },

    responseSthalaSevaMedia: function (sRequestJSON, sResponseJSON) {

        appViewSthalaSeva.responseSthalaSevaMedia(sResponseJSON);

    },

    errorSthalaSevaMedia: function (sRequestJSON, sResponseJSON) { },

    requestAnnadanamMedia: function () {

        var sRequestJSON = {

            sSP_Name: "SEVA_ANNADANAM_MEDIA"
        };

        appService.invoke("GetData", sRequestJSON, appControllerSeva.responseAnnadanamMedia, appControllerSeva.errorAnnadanamMedia)
    },

    responseAnnadanamMedia: function (sRequestJSON, sResponseJSON) {

        appViewAnnadanam.responseAnnadanamMedia(sResponseJSON);

    },

    errorAnnadanamMedia: function (sRequestJSON, sResponseJSON) { }

};