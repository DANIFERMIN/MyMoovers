const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
  street: String,
  number: Number,
  postalCode: String,
  city: String

});

module.exports = model('Address', addressSchema);
