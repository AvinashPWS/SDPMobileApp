///<reference path='/appView/appConstant.js' />

var appControllerDonation = {
    requestSetDonationSthalaSeva: function (SetDonationSthalaSevaJSON) {

        var sRequestJSON = {
        };

        $.extend(sRequestJSON, SetDonationSthalaSevaJSON);

        appService.invoke("SetDonationSthalaSeva",
                sRequestJSON,
                appControllerDonation.responseSetDonationSthalaSeva,
                appControllerDonation.errorSetDonationSthalaSeva);

    },
    responseSetDonationSthalaSeva: function (sRequestJSON, sResponseJSON) {
        appViewDonationSthala.responseSetDonationSthalaSeva(sRequestJSON, sResponseJSON);
    },
    errorSetDonationSthalaSeva: function () {

    },
    requestGetDonationTypes: function () {

        var sRequestJSON = {
            "sSP_Name": "GET_DONATIONS"
        };


        appService.invoke("GetData",
                sRequestJSON,
                appControllerDonation.responseGetDonationTypes,
                appControllerDonation.errorGetDonationTypes);

    },
    responseGetDonationTypes: function (sRequestJSON, sResponseJSON) {
        appViewDonation.responseGetDonationTypes(sResponseJSON);
    },
    errorGetDonationTypes: function () {

    },
    requestSetDonation:function (sSetDonationJSON){
        
        var sRequestJSON = {
        };

        $.extend(sRequestJSON, sSetDonationJSON);

        appService.invoke("SetDonation",
                sRequestJSON,
                appControllerDonation.responseSetDonation,
                appControllerDonation.errorSetDonation);
        
    },
    responseSetDonation: function (sRequestJSON, sResponseJSON) {
        
        appViewDonation.responseSetDonation(sResponseJSON);
        
    },
    errorSetDonation: function () {

    }
};