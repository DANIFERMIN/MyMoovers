const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  trip: { type: Schema.Types.ObjectId, ref: 'Trip' },
  hours: Number,
  rate: Number,
  total: Number

});

module.exports = model('Cart', cartSchema);
