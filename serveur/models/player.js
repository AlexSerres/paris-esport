var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: String
});

var Player = mongoose.model('player', playerSchema);
module.exports = Player;