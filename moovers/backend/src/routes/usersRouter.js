/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');

const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/usersController');

const usersRouter = Router();

usersRouter
  .route('/users/:userId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);
usersRouter
  .route('/users')
  .get(getAll)
  .post(createOne);

module.exports = usersRouter;
