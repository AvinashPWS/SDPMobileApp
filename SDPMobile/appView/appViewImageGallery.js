///<reference path='/appView/appConstant.js' />

var appViewImageGallery = {

    initialize: function () {
        appViewImageGallery.requestImages();
    },

    requestImages: function () {

        appControllerGallery.requestImages();
    },

    responseImages: function (sResponseJSON) {
        //TBD 
        var groupedsResponseJSON = _.groupBy(sResponseJSON, function(o){return o.IMAGE_HEADER});
        
        var sGallayTemplate = appEngine.getTemplate('#appViewImageGalleryList');
        
        $("#appViewImageGalleryList").html(sGallayTemplate(groupedsResponseJSON));
        
        accordi.init();
        
    }


};