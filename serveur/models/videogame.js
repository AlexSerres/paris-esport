var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videogameSchema = new Schema({
    name: String,
    url: String
});

var Videogame = mongoose.model('videogame', videogameSchema);
module.exports = Videogame;