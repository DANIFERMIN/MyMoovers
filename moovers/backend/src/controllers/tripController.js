const Trip = require('../models/tripModel');
const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const foundTrips = await Trip.find(query);
    res.json(foundTrips);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newTrip = await Trip.create(body);
    const currentUser = await User.findById(body.userId);
    currentUser.trips.push(newTrip);
    currentUser.save();
    res.status(200);
    res.json(newTrip);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { tripId } }, res) {
  try {
    const theTrip = await Trip.findById(tripId)
      .populate({
        path: 'house',
        select: ['typeOfHouse', 'floors', 'rooms', 'elevator']
      })
      .populate({
        path: 'thingsToMove',
        select: ['name', 'amount']
      })
      .populate({
        path: 'pickUpAddress',
        select: ['street', 'number']
      })
      .populate({
        path: 'destinationAddress',
        select: ['street', 'number']
      });
    res.status(200);
    res.json(theTrip);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { tripId }, body }, res) {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      tripId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.status(200);
    res.json(updatedTrip);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ params: { tripId } }, res) {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(tripId);
    res.status(201);
    res.json(deletedTrip);
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
