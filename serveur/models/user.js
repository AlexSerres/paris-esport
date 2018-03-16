var mongoose = require('mongoose');
require('.././models/bet.js');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String, 
    password: String,
    bets: [{type: String, ref: 'bet'}],  
    token: String
});

var User = mongoose.model('user', userSchema);
module.exports = User;