///<reference path='/appView/appConstant.js' />

var appViewDonation = {
    initialize: function () {

        appViewDonation.showDescription();

        appControllerDonation.requestGetDonationTypes();

        $(document).off("change", "#appViewDonationDonationType");

        $(document).on("change", "#appViewDonationDonationType", function () {
            appViewDonation.onChangeDonationType(this);
        });

        $("#sb-site").css("min-height", "0px");
    },
    onChangeDonationType: function (sSelector) {
        var amount = $(sSelector).val();
        if (amount === '') {
            amount = 100;
        }
        $("#appViewDonationTotalAmount").val(amount);
    },
    showDescription: function () {
        $("#appViewDonationDescription").show();
        $("#appViewDonationForm1").hide();
        $("#appViewDonationForm2").hide();
    },
    showForm1: function () {
        $("#appViewDonationDescription").hide();
        $("#appViewDonationForm1").show();
        $("#appViewDonationForm2").hide();
    },
    showForm2: function () {

        if (!appViewDonation.validateForm1()) {
            return false;
        }

        var sFirstMember = $("#appViewDonationFamilyMembersList [data-role='FamilyMembers']:first");

        $(sFirstMember).find('[placeholder="Name"]').val($.trim($("#appViewDonationNameInput").val()));
        $(sFirstMember).find('[placeholder="Nakshatram"]').val($.trim($("#appViewDonationNakshatramInput").val()));

        $("#appViewDonationDescription").hide();
        $("#appViewDonationForm1").hide();
        $("#appViewDonationForm2").show();
    },
    addFamilyMembers: function () {

        var sFamilyMembersTemplate = appEngine.getTemplate("#appViewDonationFamilyMembersList");

        $("#appViewDonationFamilyMembersList").append(sFamilyMembersTemplate());

    },
    removeFamilyMembers: function (selector) {

        $(selector).closest('[data-role="FamilyMembers"]').remove();

    },
    validateForm1: function () {

        var sControls = $("#appViewDonationForm1 [data-role='requried']");

        $(sControls).closest('.form-group').removeClass('has-error');

        var valid = true;

        for (var i = 0; i < sControls.length; i++) {
            if ($.trim($(sControls[i]).val()) === '') {
                $(sControls[i]).closest('.form-group').addClass('has-error');
                valid = false;
            } else if ($(sControls[i]).attr('type') === 'email' && !appUtility.validateEmail($(sControls[i]).val())) {
                $(sControls[i]).closest('.form-group').addClass('has-error');
                valid = false;
            }
        }

        return valid;
    },
    responseGetDonationTypes: function (sResponseJSON) {

        $("#appViewDonationDonationType").empty();

        $("#appViewDonationDonationType").append(appUtility.addDropDownItem('-Select-', ''));

        for (var o in sResponseJSON) {
            var sDonationType = sResponseJSON[o];
            $("#appViewDonationDonationType").append(appUtility.addDropDownItem(sDonationType['Name'], sDonationType['Amount']));
        }
    },
    submitDonation: function () {

        var sDonationJSON = {
            "DonationID": "0",
            "Name": $.trim($("#appViewDonationNameInput").val()),
            "Email": $.trim($("#appViewDonationEmailInput").val()),
            "Gotram": $.trim($("#appViewDonationGotramInput").val()),
            "DateOn": $.trim($("#appViewDonationDateOnInput").val()),
            "TotalAmount": $.trim($("#appViewDonationTotalAmount").val()),
            "Nakshatram": $.trim($("#appViewDonationNakshatramInput").val()),
            "PhoneNumber": $.trim($("#appViewDonationPhoneInput").val())
        };

        var sDetailJSON = [];

        var sFamilyMembers = $("#appViewDonationFamilyMembersList [data-role='FamilyMembers']");


        for (var i = 0; i < sFamilyMembers.length; i++) {

            var sMember = sFamilyMembers[i];

            if ($.trim($(sMember).find('[placeholder="Name"]').val()) === '') {
                $(sMember).find('[placeholder="Name"]').closest('.form-group').addClass('has-error');
                return false;
            }
            if ($.trim($(sMember).find('[placeholder="Nakshatram"]').val()) === '') {
                $(sMember).find('[placeholder="Nakshatram"]').closest('.form-group').addClass('has-error');
                return false;
            }

            sDetailJSON.push({
                "Name": $.trim($(sMember).find("[placeholder='Name']").val()),
                "Nakshatram": $.trim($(sMember).find("[placeholder='Nakshatram']").val())
            });


        }

        var SetDonationJSON = {
            "sDonationJSON": JSON.stringify(sDonationJSON),
            "sDetailJSON": JSON.stringify(sDetailJSON)
        };

        $("#appViewDonationTotalAmountHidden").val($.trim($("#appViewDonationTotalAmount").val()));
        $("#appViewDonationItemNameHidden").val($.trim($("#appViewDonationDonationType").val()));

        appControllerDonation.requestSetDonation(SetDonationJSON);

        return false;
    },

    responseSetDonation: function (sResponseJSON) {

        if (sResponseJSON['STATUS'] === 'TRUE') {
            document.paypalform.submit();
        } else {
            appUtility.showMessageGeneric("Please try later or Contact : info@saidattanj.org")
        }
    }
};
