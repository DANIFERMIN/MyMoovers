const { Router } = require('express');
const passport = require('passport');
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/tripController');

const tripRouter = Router();

tripRouter
  .route('/trips/:tripId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
tripRouter
  .route('/trips')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getAll)
  .post(createOne);

module.exports = tripRouter;
