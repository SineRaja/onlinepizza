var mongoose = require('mongoose')
let buildSchema = new mongoose.Schema({
    images: String,
    title: String,
    price:Number
},
    {collection : "build"}
);
module.exports = mongoose.model('Build',buildSchema);