/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


///<reference path='/appView/appConstant.js' />

var appViewAskbaba = {
    initialize: function () {
        $("#appViewIndexAskBabaTextarea").val('').focus();
        $("#appViewAskBabaForm").show();
        $("#appViewAskBabaQuote").hide();
    },
    onClickAskbaba: function () {
        if ($.trim($("#appViewIndexAskBabaTextarea").val()) !== '') {
            appControllerAskbaba.requestQuote();
        }else{
            $("#appViewIndexAskBabaTextarea").focus();
        }
    },
    responseQuote: function (sResponseJSON) {

        if (sResponseJSON && sResponseJSON['QUOTE'])
            $("#appViewAskBabaQuoteText").html(sResponseJSON['QUOTE']);
        else
            $("#appViewAskBabaQuoteText").html("Thank you");

        $("#appViewAskBabaForm").hide();
        $("#appViewAskBabaQuote").show();
    }

};