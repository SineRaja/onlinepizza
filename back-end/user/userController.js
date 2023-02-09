const mongoose = require('mongoose');
const userService = require('./userService');

exports.registerUser = function (req, res) {
    mongoose.connect("mongodb://localhost:27021/meandb").then(function (client) {
        console.log("Connnected to Database...")

        userService.createUser(req.body)
            .on('ERROR', function () {
                res.send({
                    message: "Error"
                })
            })
            .on('SUCCESS', function () {
                res.send({
                    message: "Success"
                })
            })
            .on("DUPLICATE", function () {
                res.send({
                    message: "Duplicate"
                })
            })
            
    },
        (error) => {
            res.send({
                message: "Error"
            })
        })
}

exports.searchUser = function (req, res) {
    mongoose.connect("mongodb://localhost:27021/meandb").then(function (client) {
        console.log("Connected to Database...")
        userService.findUser(req.body)
            .on('ERROR', function () {
                res.status(500).send({
                    error: "Error"
                })
            })
            .on('SUCCESS', function () {
                res.send({
                    message: "Success"
                })
            })
            .on('NULL', function () {
                res.send({
                    message: "Invalid"
                })
            })
    },
        (error) => {
            res.send({
                message: "Error"
            })
        })
}
