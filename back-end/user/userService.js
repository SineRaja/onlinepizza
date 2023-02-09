const EventEmitter = require('events');
const userModel = require('./userModel');

exports.createUser = function(data){
    const emitter = new EventEmitter();
    var userData = new userModel(data);
    userData.save().then(function(result){
        emitter.emit('SUCCESS');
        console.log("Result of the Database operation ", result);
    },

    function(error){
        console.log("Error od the Database  operation ",error);
        if(error.code==11000){
            emitter.emit("DUPLICATE");
        }else{
            emitter.emit("Error");
        }
    })
    return emitter;
}

exports.findUser = function(data){
    var query = {
        username:data.username,
        password:data.password
    }
    var emitter = new EventEmitter();
    userModel.findOne(query).then(function(result){
        if(result){
            console.log(result);
            emitter.emit("SUCCESS")
        }
        else{
            console.log(result);
            emitter.emit("NULL")
        }
    }, function(error){
        if(error){
            emitter.emit("ERROR")
        }
    })
    return emitter;
}