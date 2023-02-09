var mongoose = require('mongoose')
let pizzaSchema = new mongoose.Schema({
    pizza_title:String,
    price: Number,
    discription:String,
    ingredients:String,
    toppings:String,
    images:String,
    type:String
},
{collection: "pizza"}
);
module.exports = mongoose.model('Pizza',pizzaSchema);