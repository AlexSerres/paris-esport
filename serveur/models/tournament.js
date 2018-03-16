var mongoose = require('mongoose');
require('./../models/videogame.js');
var Schema = mongoose.Schema;

var tournamentSchema = new Schema({
    name: String,
    date: String,
    hour: String,
    videogame: {type: String, ref: 'videogame'},
});

var Tournament = mongoose.model('tournament', tournamentSchema);
module.exports = Tournament;