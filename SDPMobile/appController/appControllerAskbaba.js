/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var appControllerAskbaba = {
    requestQuote: function () {
        
        appControllerAskbaba.responseQuote();

        var sRequestJSON = {
            "sSP_Name": "LIST_QUOTES"
        };


        appService.invoke("GetData",
                sRequestJSON,
                appControllerAskbaba.responseQuote,
                appControllerAskbaba.errorQuote);

    },
    responseQuote: function (sRequestJSON, sResponseJSON) {
        appViewAskbaba.responseQuote(sResponseJSON);
    },
    errorQuote: function () {

    }
};