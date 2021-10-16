const { Router } = require('express');
const passport = require('passport');
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/cartController');

const CartRouter = Router();

CartRouter
  .route('/carts/:cartId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
CartRouter
  .route('/Carts')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getAll)
  .post(createOne);

module.exports = CartRouter;
