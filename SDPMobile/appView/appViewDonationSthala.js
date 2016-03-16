///<reference path='/appView/appConstant.js' />

var appViewDonationSthala = {
    sponsorModel: function () {
        return {
            "SNO": "",
            "FirstName": "",
            "LastName": ""
        };
    },
    initialize: function () {

        appViewDonationSthala.showFrom1();

        $(document).off("click", "#appViewDonationSthala" + " .clearbtn");

        $(document).on("click", "#appViewDonationSthala" + " .clearbtn", function () {
            $(this).parent().parent().find("input").val('').focus();
        });

    },
    showFrom1: function () {
        $("#appViewDonationSthalaForm2").hide();
        $("#appViewDonationSthalaForm1").show();
    },
    showFrom2: function () {

        var sEmailID = $("#appViewDonationSthalaEmailInput");
        var sPhoneNo = $("#appViewDonationSthalaPhoneInput");

        $('.form-group').removeClass('has-error');

        if ($.trim($(sEmailID).val()) === "" || !appUtility.validateEmail($.trim($(sEmailID).val()))) {
            $(sEmailID).closest('.form-group').addClass('has-error');
            return false;
        }

        if ($.trim($(sPhoneNo).val()) === "") {
            $(sPhoneNo).closest('.form-group').addClass('has-error');
            return false;
        }

        $("#appViewDonationSthalaForm2").show();
        $("#appViewDonationSthalaForm1").hide();

        if ($.trim($("#appViewDonationSthalaSponsorList").html()) === "") {
            appViewDonationSthala.addSponsor();
        }

    },
    addSponsor: function () {

        var sSponserTemplate = appEngine.getTemplate("#appViewDonationSthalaSponsorList");

        $("#appViewDonationSthalaSponsorList").append(sSponserTemplate());

        appViewDonationSthala.calculateTotalAmount(1);

    },
    deleteSponsor: function (selector) {

        $(selector).closest('[data-role="sponsor"]').remove();

        appViewDonationSthala.calculateTotalAmount(-1);

    },
    calculateTotalAmount: function (count) {

        var sSponsorCount = $.trim($("#appViewDonationSthalaSponsorCount").html());

        sSponsorCount = parseInt(sSponsorCount) + count;

        $("#appViewDonationSthalaSponsorCount").html(sSponsorCount);

        $("#appViewDonationSthalaTotalAmount").html(sSponsorCount * 11);

    },
    submitSponsors: function () {

        var sSponsorsList = $('[data-role="sponsor"]');

        var SetDonationSthalaSevaJSON = {
            sDonationJSON: null,
            sDetailJSON: null
        };

        var sDonationJSON = {
            "Email": $.trim($("#appViewDonationSthalaEmailInput").val()),
            "TotalAmount": $.trim($("#appViewDonationSthalaTotalAmount").html()),
            "PhoneNumber": $.trim($("#appViewDonationSthalaPhoneInput").val())
        };

        $("#appViewDonationSthalapaypalformAmount").val($.trim($("#appViewDonationSthalaTotalAmount").html()));

        var sDetailJSON = [];

        for (var i = 0; i < sSponsorsList.length; i++) {
            var sponsor = $(sSponsorsList[i]);

            var sSponsorModel = new appViewDonationSthala.sponsorModel();

            sSponsorModel.SNO = i + 1;
            sSponsorModel.FirstName = $.trim($(sponsor).find('[placeholder="Firstname"]').val());
            sSponsorModel.LastName = $.trim($(sponsor).find('[placeholder="Lastname"]').val());

            if (sSponsorModel.FirstName === "" || sSponsorModel.LastName === "") {
                appUtility.showMessageGeneric('Please provide all sponsors details');
                return;
            }

            sDetailJSON.push(sSponsorModel);
        }

        SetDonationSthalaSevaJSON.sDonationJSON = JSON.stringify(sDonationJSON);
        SetDonationSthalaSevaJSON.sDetailJSON = JSON.stringify(sDetailJSON);

        appControllerDonation.requestSetDonationSthalaSeva(SetDonationSthalaSevaJSON);
    },
    responseSetDonationSthalaSeva: function (sRequestJSON, sResponseJSON) {
        if (sResponseJSON['STATUS'] === 'TRUE') {
            appUtility.payPalPost("#appViewDonationSthalapaypalform");

        } else {
            appUtility.showMessageGeneric('Please try Later');
        }
    }

};