///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */


//var DeviceToken = function () {

//};

//// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)
//DeviceToken.prototype.register = function (successCallback, errorCallback, options) {
//    if (errorCallback == null) {
//        errorCallback = function () { }
//    }

//    if (typeof errorCallback != "function") {
//        console.log("PushNotification.register failure: failure parameter not a function");
//        return;
//    }

//    if (typeof successCallback != "function") {
//        console.log("PushNotification.register failure: success callback parameter must be a function");
//        return;
//    }

//    cordova.exec(successCallback, errorCallback, "DeviceToken", "registerDeviceToken", [options]);
//};


//DeviceToken.prototype.get = function (successCallback, errorCallback, options) {

//    //    return cordova.exec(onSuccess, onFail, 'PushPlugin', 'get', []);

//    cordova.exec(successCallback, errorCallback, "DeviceToken", "get", [options]);

//};

//// Call this to set the application icon badge
//DeviceToken.prototype.setApplicationIconBadgeNumber = function (successCallback, errorCallBack, badgeNo) {
//    if (errorCallback == null) {
//        errorCallback = function () { }
//    }

//    if (typeof errorCallback != "function") {
//        console.log("PushNotification.setApplicationIconBadgeNumber failure: failure parameter not a function");
//        return;
//    }

//    if (typeof successCallback != "function") {
//        console.log("PushNotification.setApplicationIconBadgeNumber failure: success callback parameter must be a function");
//        return;
//    }

//    cordova.exec(successCallback, errorCallBack, "DeviceToken", "setApplicationIconBadgeNumber", [badgeNo]);


//};

////-------------------------------------------------------------------

//if (!window.plugins) {
//    window.plugins = {};
//}
//if (!window.plugins.pushNotification) {
//    window.plugins.pushNotification = new PushNotification();
//}