///<reference path='/appView/appConstant.js' />

        firstBy = (function () {
            function e(f) {
                f.thenBy = t;
                return f
            }
            function t(y, x) {
                x = this;
                return e(function (a, b) {
                    return x(a, b) || y(a, b)
                })
            }
            return e
        })();

var appUtility = {
    log: function (sMessage) {
        //VERY IMPORTANT : DISABLE LOGS ON PRODUCTION TO IMPROVE EXECUTION SPEED
        //console.log(sMessage);

    },
    debug: function () {

    },
    showView: function (sViewID) {

        $("[data-type='view']").hide();
        $(sViewID).show();

    },
    showProgress: function () {
        $("body").addClass("loading");
    },
    closeProgress: function () {
        if (sCloseProgress) {
            $("body").removeClass("loading");
        }
    },
    showModal: function (sModalID) {

        $(sModalID).modal("show");

    },
    closeModal: function (sModalID) {

        $(sModalID).modal('hide')

    },
    setSession: function (sKey, sValue) {
        window.sessionStorage.setItem(sKey, sValue);
    },
    getSession: function (sKey) {
        return appUtility.resetNull(window.sessionStorage.getItem(sKey));
    },
    clearSession: function () {
        return window.sessionStorage.clear();
    },
    setLocal: function (sKey, sValue) {
        window.localStorage.setItem(sKey, sValue);
    },
    getLocal: function (sKey) {
        return appUtility.resetNull(window.localStorage.getItem(sKey));
    },
    clearLocal: function () {
        return window.localStorage.clear();
    },
    JSONToString: function (sValue) {

        return JSON.stringify(sValue);
    },
    stringToJSON: function (sValue) {

        return $.parseJSON(sValue);
    },
    getYear: function () {
        var sDateObject = new Date();
        return sDateObject.getFullYear();
    },
    getTime: function (sIsFormat) {
        var sDate = new Date();
        var sTime = "";
        if (sIsFormat) {

            var sHours = sDate.getHours();
            var sMins = sDate.getMinutes();
            var sSecs = sDate.getSeconds();

            if (sHours <= 9) {
                sHours = "0" + sHours;
            }

            if (sMins <= 9) {
                sMins = "0" + sMins;
            }

            if (sSecs <= 9) {
                sSecs = "0" + sSecs;
            }

            sTime = sHours + ":" + sMins + ":" + sSecs;
        }
        else {
            sTime = sDate.getTime();
        }

        return sTime;

    },
    getDateFromUTC: function (date) {

        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    },
    getDate: function () {
        var sDateObject = new Date();

        var sDate = sDateObject.getDate();
        if (sDate <= 9) {
            sDate = "0" + sDate;
        }

        var sMonth = parseInt(sDateObject.getMonth()) + 1;
        if (sMonth <= 9) {
            sMonth = "0" + sMonth;
        }

        var sFormattedDate = sDate + "-" + sMonth + "-" + sDateObject.getFullYear();
        sFormattedDate = sMonth + "-" + sDate + "-" + sDateObject.getFullYear();

        return sFormattedDate;
    },
    getDateString: function () {

        var sMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var sDate = appUtility.getDate();
        var sMonth = sMonths[parseInt(sDate.split("-")[0]) - 1];
        sDate = sDate.split("-")[1] + " " + sMonth + " " + +sDate.split("-")[2] + ", " + appUtility.getTime(true);

        return sDate;
    },
    getDay: function (sDate) {

        var sDayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

        var sDateObject = new Date();

        if (sDate == undefined || sDate == null) {
        }
        else {
            sDate = sDate.split("-");
            sDateObject = new Date(sDate[0], sDate[1] - 1, sDate[2]); //YYYY,MM,DD
        }

        return sDayNames[sDateObject.getDay()];
    },
    getGUID: function () {

        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");

        //First 8 charatcers to reduce the overhead on local DB.
        uuid = uuid.split("-")[0];

        return uuid.toUpperCase();


    },
    getDeviceInfo: function () {

        navigator.sayswho = (function () {

            var ua = navigator.userAgent,
                    N = navigator.appName, tem,
                    M = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || [];
            M = M[2] ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];

            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)
                M[2] = tem[1];
            $("#DeviceInfo").html("Device Status : " + M.join(' '));

            var sStatus = "Offline";
            if (navigator.onLine) {
                sStatus = "Online";
            }

            $("#NetworkInfo").html("Network Status : " + sStatus);
        })();
    },
    randomize: function (sArray, sCount) {

        var sRandomize = sArray.slice(0), i = sArray.length, sMin = i - sCount, sTemp, sIndex;

        while (i-- > sMin) {
            sIndex = Math.floor(i * Math.random());
            sTemp = sRandomize[sIndex];
            sRandomize[sIndex] = sRandomize[i];
            sRandomize[i] = sTemp;
        }

        return sRandomize.slice(sMin);
    },
    resetNull: function (sObject, sDisplayValue) {

        if (sDisplayValue == null) {
            sDisplayValue = "";
        }

        if (sObject == null || sObject == "") {
            return sDisplayValue;
        }

        return sObject;
    },
    noRecordMessage: function (sMessage) {

        var sMessage = "<span class='text-error' style='font-size:12px;font-weight:bold'>No records found.</span>";
        if (sMessage != null) {
            sMessage = "<span class='text-error' style='font-size:12px;font-weight:bold'>" + sMessage + "</span>";
        }

        return sMessage;
    },
    Encrypt: function (sData) {

        var sResult = "";

        if (appUtility.resetNull(sData) != "") {

            var key = 100; //Any integer value

            for (i = 0; i < sData.length; i++) {
                sResult += String.fromCharCode(key ^ sData.charCodeAt(i));
            }

        }

        return sResult;
    },
    Decrypt: function (sData) {

        var sResult = "";

        if (appUtility.resetNull(sData) != "") {

            var key = 100; //Any integer value
            var sResult = "";
            for (i = 0; i < sData.length; i++) {
                sResult += String.fromCharCode(key ^ sData.charCodeAt(i));
            }
        }

        return sResult;
    },
    addDropDownItem: function (sText, sValue) {

        if (sValue == null) {
            sValue = sText;
        }

        var oOption = document.createElement("option");
        oOption.value = sValue;
        oOption.text = appUtility.resetNull(sText);

        return oOption;
    },
    addDropDownGroupItem: function (lable) {

        var oOptgroup = document.createElement("optgroup");
        oOptgroup.label = lable;
        return oOptgroup;
    },
    caseFormat: function (sValue) {
        return sValue.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },
    getUserID: function () {
        return appUtility.getLocal("UserID");
    },
    getPassword: function () {
        return appUtility.Decrypt(appUtility.getLocal("Password"));
    },
    getUserInfo: function () {
        return appUtility.getLocal("UserInfo");
    },
    setUserID: function (sUserID) {
        appUtility.setLocal("UserID", sUserID);
    },
    setPassword: function (sPassword) {
        appUtility.setLocal("Password", appUtility.Encrypt(sPassword));
    },
    setUserInfo: function (sUserInfo) {
        appUtility.setLocal("UserInfo", sUserInfo);
    },
    separator: function () {
        return "<;;>"
    },
    getMappedModel: function (sModel, sObject) {

        for (var sProperty in sModel) {
            sModel[sProperty] = appUtility.resetNull(sObject[sProperty]);
            if (sModel[sProperty] == "null" || sModel[sProperty] == null || sModel[sProperty] == "(null)") {
                sModel[sProperty] = "";
            }
        }

        return sModel;
    },
    trimDateTime: function (sDateTime) {

        if (sDateTime.indexOf("T") != -1) {
            sDateTime = sDateTime.split("T")[0];
        }
        else {
            sDateTime = sDateTime.split(" ")[0];
        }

        return sDateTime;

    },
    resetUndefined: function (sValue) {

        if (sValue == undefined) {
            sValue = "";
        }

        return sValue;
    },
    scrollTop: function () {
        window.location.href = "#appViewBody";
    },
    logout: function () {

        $("#DOMStorage").attr("LOGOUT", "1");
        appUtility.clearSession();

        location.href = "index.html";
        //                location.reload();
    },
    toggleMenuPanel: function () {
        if (!$("#nav").hasClass("nav-xs")) {
            $("#appMenuToggleButton").click();
        }
    },
    oConstant: function () {

        return {
            Empty: "",
            SDP: "Sai Datta Peetham",
            DisplayNone: "display:none", DisplayBlock: "display:block", DisplayInlineBlock: "inline-block",
            OK: "OK", Yes: "Yes", No: "No", Cancel: "Cancel", Back: "Back", Save: "Save", Show: "Save"
        }

    },
    oMessage: function () {

        return {
            Header: "Sai Datta Peetham", MessageText: "", Image: "",
            Button1Text: "", Button2Text: "", Button3Text: "",
            Button1Href: "", Button2Href: "", Button3Href: "",
            Button1Visible: "display:none", Button2Visible: "display:none", Button3Visible: "display:none"
        };
    },
    showMessage: function (sMessage) {

        $("#appViewMessageHeader").html(sMessage.Header);
        $("#appViewMessageBody").html(sMessage.MessageText);
        $("#appViewMessageImage").attr("src", sMessage.Image);

        $("#appViewMessageButton1").html(sMessage.Button1Text);
        $("#appViewMessageButton2").html(sMessage.Button2Text);
        $("#appViewMessageButton3").html(sMessage.Button3Text);

        $("#appViewMessageButton1").attr("onclick", sMessage.Button1Href);
        $("#appViewMessageButton2").attr("onclick", sMessage.Button2Href);

        //        $("#appViewMessageButton1").attr("href", sMessage.Button1Href);
        //        $("#appViewMessageButton2").attr("href", sMessage.Button2Href);
        //        $("#appViewMessageButton3").attr("href", sMessage.Button3Href);

        $("#appViewMessageButton1").attr("style", sMessage.Button1Visible);
        $("#appViewMessageButton2").attr("style", sMessage.Button2Visible);

        //        $("#appViewMessageButton3").attr("style", sMessage.Button3Visible);

        $("#appViewMessage").modal("show");

    },
    showMessageGeneric: function (sMessageText) {

        var oMessage = appUtility.oMessage();
        oMessage.MessageText = sMessageText;
        oMessage.Button2Text = appUtility.oConstant().OK;
        oMessage.Button2Visible = appUtility.oConstant().DisplayInlineBlock;
        appUtility.showMessage(oMessage);
    },
    initializeCheckbox: function (sListID, sCheckboxID) {

        $(sListID).find('.checkbox-custom > input[type=checkbox]').each(function () {
            $(this).removeAttr("checked");
            var $this = $(this);
            if ($this.data('checkbox'))
                return;
            $this.checkbox($this.data());
        });

    },
    resetCheckbox: function (sCheckboxID) {

        $(sCheckboxID).removeAttr("checked").next().attr("class", "fa fa-fw fa-square-o");
        ;

    },
    toggleCheckbox: function (sListID, sCheckboxID) {

        if (!$(sCheckboxID).is(":checked")) {
            $(sCheckboxID).next().attr("class", "fa fa-fw fa-square-o");
            $(sListID).find("i[class='fa fa-fw fa-square-o checked']").attr("class", "fa fa-fw fa-square-o");
        }
        else {
            $(sCheckboxID).next().attr("class", "fa fa-fw fa-square-o checked");
            $(sListID).find("i[class='fa fa-fw fa-square-o']").attr("class", "fa fa-fw fa-square-o checked");
        }
    },
    getUnique: function (a) {


        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for (var i = 0; i < len; i++) {
            var item = a[i];
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }

        return out;


    },
    initializeTootip: function () {

        $("[data-toggle='tooltip']").tooltip({html: true}); // enable bootstrap 3 tooltips
        $('[data-toggle="popover"]').popover({
            trigger: 'hover',
            'placement': 'top',
            'show': true
        });

    },
    getTable: function (sTableName) {

        var sTable = appUtility.getLocal(sTableName);

        if (sTable == "") {
            sTable = [];
        }
        else {
            sTable = appUtility.stringToJSON(sTable);
            sTable = sTable["Table"];
        }

        return sTable;
    },
    getWindowHeight: function (minusHeight) {

        if (minusHeight) {
            return Math.floor($(window).height() - minusHeight);
        }
        return Math.floor($(window).height() - 0);
    },
    multiSelect: function (sID) {

        $("#" + sID).multiselect({
            buttonWidth: '100%',
            nonSelectedText: '-Select-',
            includeSelectAllOption: true,
            maxHeight: appUtility.getWindowHeight(300),
            enableFiltering: true,
            enableClickableOptGroups: true,
            enableCaseInsensitiveFiltering: true
        });

        $(".glyphicon.glyphicon-remove-circle").attr("class", "fa fa-times-circle-o");
        $(".glyphicon.glyphicon-search").attr("class", "fa fa-search");

    },
    getImagePath: function (sImagePath) {
        return sImagePath.replace('~', APP_SITE_URL);
    },
    setHeight: function (sMinusHeight) {
        if (sMinusHeight) {
            return Math.floor($(window).height() - sMinusHeight);
        }
        return Math.floor($(window).height() - 300);
    },
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    validatePhoneNo: function (phoneno) {
        var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return re.test(phoneno);
    }
};