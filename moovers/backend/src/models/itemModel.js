const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: String,
  amount: Number,
  room: String

});

module.exports = model('Item', itemSchema);
