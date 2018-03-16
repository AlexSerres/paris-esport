var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oddSchema = new Schema({
    condi: String,
    value: [Number]
});

var Odd = mongoose.model('odd', oddSchema);
module.exports = Odd;