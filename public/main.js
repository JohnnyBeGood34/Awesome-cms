/**
 * Created by JOHNNY on 01/04/14.
 */
yepnope({
    load: {
        jquery: 'javascripts/libs/vendors/jquery.js',
        jqueryUi: 'javascripts/libs/vendors/jqueryUi/js/jquery-ui.js',
        bootstrap: 'javascripts/libs/vendors/bootstrap/js/bootstrap.js',
        underscore: 'javascripts/libs/vendors/underscore.js',
        backbone: 'javascripts/libs/vendors/backbone.js',
        mustache: 'javascripts/libs/vendors/mustache.js',
        croppic: 'javascripts/libs/vendors/croppic.min.js',
        colorpicker : 'javascripts/libs/vendors/colorpicker/js/colorpicker.js',
        tinymce : 'javascripts/libs/vendors/tinymce/tinymce.min.js',
        //NameSpace
        cms: 'CMS.js',

        //Models

        //Controllers


        //Routes
        routes: 'routes.js',

        //UI CMS
        UI: 'javascripts/UI.js'
    },

    callback: {
        "routes": function() {

        }
    },
    complete: function() {
        $(function() {
            $(".subMenu").hide();
            $(".showSettings").click(function(){
                $(".subMenu").show('blind',200);
                var action = $(this).data("action");
                switch(action){
                    case "pages":
                        addSettingsPage();
                        break;
                    case "elements":
                        addSettingsElement();
                        break;
                    case "settings":
                        addSettings();
                        break;
                }
                $('.subMenu').append('<a href="#" class="hideSubmenu pull-right">Hide</a>');
            });

            $("body").delegate(".hideSubmenu","click",function(){
                $(".subMenu").html("");
                $(".subMenu").hide('blind',200);
            });
            $("body").delegate(".showWidgets","click",function(){
                showWidgetMenu();
                $('.subMenu').append('<a href="#" class="hideSubmenu pull-right">Hide</a>');
            });
            $("body").delegate(".backToElement","click",function(){
                addSettingsElement();
                $('.subMenu').append('<a href="#" class="hideSubmenu pull-right">Hide</a>');
            });
            $("body").delegate(".addPicture","click",function(){
                addPicture();
            });
            $("body").delegate(".removeElement","click",function(){
               removeElement($(this));
            });
            $("body").delegate(".linkElement","click",function(){
               showModalConfig($(this));
            });
            $("body").delegate(".linkType","change",function(){
               addLinkInput($(this).val());
            });
            $("body").delegate(".cropPict","click",function(){
               //Here put a crop
            });
            $("body").delegate(".setInfoPict","click",function(){
                showModalConfig($(this));
            });
            $("body").delegate(".contentImgPage","click",function(){

            });
            $("body").delegate(".pageColor","click",function(){
                showModalConfig($(this));
            });
            $("body").delegate(".pageBackground","click",function(){
                showModalConfig($(this));
            });
            $("body").delegate(".backgroundType","change",function(){
                var event = $(this).val();
                addBackgroundType(event);
            });
            $("body").delegate(".pageSeo","click",function(){
                showModalConfig($(this));
            });
            $("body").delegate(".pageAnalytic","click",function(){
                showModalConfig($(this));
            });
            $("body").delegate(".pageDomain","click",function(){
                showModalConfig($(this));
            });
            $("body").delegate(".addText","click",function(){
                addTextToPage();
            });
            //Ask if the user really want to quit the page
            $(window).bind('beforeunload', function(){
                return 'Are you sure you want to leave?';
            });
            //Hide loading when all loads finished
            $(".contentLoader").hide();
        });
    }
});

