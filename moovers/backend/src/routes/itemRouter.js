const { Router } = require('express');
const passport = require('passport');
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/itemController');

const ItemRouter = Router();

ItemRouter
  .route('/items/:itemId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
ItemRouter
  .route('/items')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getAll)
  .post(createOne);

module.exports = ItemRouter;
