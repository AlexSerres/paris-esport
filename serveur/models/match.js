var mongoose = require('mongoose');
require('./tournament.js');
require('./odd.js');
require('./team.js');
require('./videogame.js')
var Schema = mongoose.Schema;

var matchSchema = new Schema({
    name: String,
    bestof: Number,
    tournament: {type: String, ref: 'tournament'},
    teams: [{type: String, ref: 'team'}],
    odds: [{type: String, ref: 'odd'}],  
    videogame: {type: String, ref: 'videogame'}
});


var Match = mongoose.model('match', matchSchema);
module.exports = Match;