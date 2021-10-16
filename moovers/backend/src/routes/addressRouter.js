const { Router } = require('express');
const passport = require('passport');
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/addressController');

const AddressRouter = Router();

AddressRouter
  .route('/addresses/:addressId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
AddressRouter
  .route('/addresses')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getAll)
  .post(createOne);

module.exports = AddressRouter;
