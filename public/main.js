/**
 * Created by JOHNNY on 01/04/14.
 */
yepnope({
    load: {
        jquery: 'javascripts/libs/vendors/jquery.js',
        bootstrap: 'javascripts/libs/vendors/bootstrap/js/bootstrap.js',
        underscore: 'javascripts/libs/vendors/underscore.js',
        backbone: 'javascripts/libs/vendors/backbone.js',
        mustache: 'javascripts/libs/vendors/mustache.js',

        //NameSpace
        cms: 'CMS.js',

        //Models

        //Controllers


        //Routes
        routes: 'routes.js'

    },

    callback: {
        "routes": function() {
            console.log("routes loaded ...");
        }
    },
    complete: function() {
        $(function() {
            $('.carousel').carousel({
                interval: 4000
            })

        });
    }
});