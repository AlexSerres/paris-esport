var mongoose = require('mongoose');
require('./odd.js');
var Schema = mongoose.Schema;

var betSchema = new Schema({
    value: Number,
    odd: {type: String, ref: 'odd'},  
    rate: Number,
    total: Number
});


var Bet = mongoose.model('bet', betSchema);
module.exports = Bet;