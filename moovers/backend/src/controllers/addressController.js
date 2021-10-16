/* eslint-disable no-underscore-dangle */
const Address = require('../models/addressModel');
const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const foundAddresses = await Address.find(query);
    res.json(foundAddresses);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newAddress = await Address.create(body);
    const currentUser = await User.findById(body.userId);
    currentUser.favorites.push(newAddress);
    currentUser.save();
    res.status(200);
    res.json(newAddress);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { addressId } }, res) {
  try {
    const theAddress = await Address.findById(addressId);
    res.status(200);
    res.json(theAddress);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { addressId }, body }, res) {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.status(200);
    res.json(updatedAddress);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ params: { addressId }, body }, res) {
  try {
    const deletedAddress = await Address.findByIdAndDelete(addressId);

    const currentUser = await User.findById(body.userId);

    currentUser.favorites = currentUser.favorites
      .filter((currentAddress) => currentAddress._id.toString() !== addressId);

    currentUser.save();
    res.status(201);
    res.json(deletedAddress);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {

  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne

};
