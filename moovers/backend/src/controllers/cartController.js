const Cart = require('../models/cartModel');

async function getAll({ query }, res) {
  try {
    const foundCarts = await Cart.find(query);
    res.json(foundCarts);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newCart = await Cart.create(body);
    res.status(200);
    res.json(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { cartId } }, res) {
  try {
    const theCart = await Cart.findById(cartId)
      .populate({
        path: 'user',
        select: ['firstName', 'lastName']
      })
      .populate({
        path: 'trip',
        select: ['name', 'pickUpAddress', 'destinationAddress', 'house'],
        populate: [{ path: 'thingsToMove', select: ['name', 'amount'] },
          { path: 'pickUpAddress', select: ['street', 'number'] },
          { path: 'destinationAddress', select: ['street', 'number'] }]
      });
    res.status(200);
    res.json(theCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { CartId }, body }, res) {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      CartId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.status(200);
    res.json(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ params: { CartId } }, res) {
  try {
    const deletedCart = await Cart.findByIdAndDelete(CartId);
    res.status(201);
    res.json(deletedCart);
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
