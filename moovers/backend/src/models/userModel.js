const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  trips: [{ type: Schema.Types.ObjectId, ref: 'Trip' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Address' }]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};
module.exports = model('User', userSchema);
