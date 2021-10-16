/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const foundUsers = await User.find(query);
    res.json(foundUsers);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.status(200);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { userId } }, res) {
  try {
    const theUser = await User.findById(userId)
      .populate({
        path: 'trips',
        select: ['pickUpAddress',
          'destinationAddress', 'house',
          'thingsToMove']
      })
      .populate({
        path: 'favorites',
        select: ['street', 'number', 'postaCode', 'city']
      });
    res.status(200);
    res.json(theUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { userId }, body }, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.status(200);

    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ params: { userId } }, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(201);
    res.json(deletedUser);
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
