var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentSchema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, min: 0, required: true },
  price: { type: Number, min: 0 }
});

RentSchema.pre('save', function(next) {
  var rent = this;
  next();
});

module.exports = mongoose.model('Rent', RentSchema);
