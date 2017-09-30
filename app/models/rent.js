var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentSchema = new Schema({
  name: { type: String, lowercase: true, required: true, unique: true },
  duration: { type: Number, min: 0, required: true },
  price: { type: Number, min: 0, required: true }
});

RentSchema.pre('save', function(next) {
  var rent = this;
  next();
});


// 20€/s
// 25€/s, če najem traja več kot 15s 



module.exports = mongoose.model('Rent', RentSchema);
