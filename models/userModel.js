/**
 * Created by JOHNNY on 30/03/14.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:{type:String,required:true},
    lastName:{type:String,required:true},
    phone:{type:String},
    mail:{type:String,required:true},
    password:{type:String,required:true},
    cmsViewModel:{type:mongoose.Schema.Types.ObjectId,ref:"cmsViewModel"}
});

var User=mongoose.model('User',userSchema);

global.User=User;