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
            })
            //Hide loading when all loads finished
            $(".contentLoader").hide();
        });
    }
});

