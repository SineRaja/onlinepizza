var express = require('express');
var mongoose = require('mongoose');
var Pizza = require('./pizzaModel');

var router = express.Router();

router.get('/list', function (req, res, next){
    mongoose.connect('mongodb://localhost:27021/meandb',{useNewUrlParser: true, useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', ()=> console.log("connect to mongodb server no 27021"));

    Pizza.find({}, (err, pizza)=>{
        if(err){
            console.log("Error : " + err);
        }else {
            mongoose.disconnect();
            res.send(pizza)
        }
    });
});




module.exports = router;