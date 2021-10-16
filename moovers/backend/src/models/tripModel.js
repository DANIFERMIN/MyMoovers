const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
  pickUpAddress: {
    street: String, number: Number, postalCode: String, city: String
  },
  destinationAddress: {
    street: String, number: Number, postalCode: String, city: String
  },
  date: Date,
  time: String,
  house: {
    typeOfHouse: String, floors: Number, rooms: Number, elevator: Boolean
  },
  thingsToMove: [{ thingName: String, amount: Number }]

});

module.exports = model('Trip', tripSchema);
