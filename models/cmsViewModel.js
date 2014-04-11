/**
 * Created by JOHNNY on 30/03/14.
 */
var mongoose = require('mongoose');
//Model that contains Backbone view user model
var cmsViewSchema = mongoose.Schema({
    contentView : {type:String}
});

var CmsView=mongoose.model('CmsView',cmsViewSchema);

global.CmsView=CmsView;