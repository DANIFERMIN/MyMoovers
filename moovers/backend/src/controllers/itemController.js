const Item = require('../models/itemModel');

async function getAll({ query }, res) {
  try {
    const foundItems = await Item.find(query);
    res.json(foundItems);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newItem = await Item.create(body);
    res.status(200);
    res.json(newItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { itemId } }, res) {
  try {
    const theItem = await Item.findById(itemId);
    res.status(200);
    res.json(theItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOne({ params: { itemId }, body }, res) {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.status(200);
    res.json(updatedItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOne({ params: { itemId } }, res) {
  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);
    res.status(201);
    res.json(deletedItem);
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
