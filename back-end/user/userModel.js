const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username:{type:String, unique:true, required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    created:{type:Date, default:new Date()}

})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;