var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HelicopterSchema = new Schema({
  picture: { type: String, required: true },
  name: { type: String, lowercase: true, required: true, unique: true },
  power: { type: Number, min: 0, required: true },
  passengers: { type: Number, min: 0, required: true },
  speed: { type: Number, min: 0, required: true },
  isAvailable: { type: Boolean, default: false }
});

HelicopterSchema.pre('save', function(next) {
  var helicopter = this;
  next();
});

module.exports = mongoose.model('Helicopter', HelicopterSchema);