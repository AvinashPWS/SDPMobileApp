/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


///<reference path='/appView/appConstant.js' />

var appViewAskbaba = {
    initialize: function () {
        $("#appViewAskBabaForm").show();
        $("#appViewAskBabaQuote").hide();
    },
    onClickAskbaba: function () {
        appControllerAskbaba.requestQuote();
    },
    responseQuote: function (sResponseJSON) {
        
        $("#appViewAskBabaQuoteText").html();
        
        $("#appViewAskBabaForm").hide();
        $("#appViewAskBabaQuote").show();
    }

};