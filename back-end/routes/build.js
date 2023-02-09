var express = require('express');
var mongoose = require('mongoose');
var Build = require('./buildModel');

var router = express.Router();

router.get('/data', function(req,res,next){
    mongoose.connect('mongodb://localhost:27021/meandb',{useNewUrlParser: true, useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, "Connection error:"))
    db.once('open',()=> console.log("Connection successfully done to port no 27021..."))

    Build.find({}, (err, data)=>{
        if(err){
            console.log("Error : " + err);
        }else {
            mongoose.disconnect();
            res.send(data)
        }
    });
});

module.exports = router;