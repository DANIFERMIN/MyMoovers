/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

let refreshTokens = [];

function setRefreshToken(token) {
  refreshTokens.push(token);
}

async function registerUser({ user, body: { firstName, lastName } }, res) {
  try {
    const createdUser = await User.create({ ...user, firstName, lastName });
    res.status(200);
    res.json({
      createdUser,
      message: 'User registered'
    });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function loginUser({ user }, res) {
  const data = {
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName
  };

  const token = jwt.sign(
    { user: data },
    process.env.JWT_SECRET,
    { expiresIn: '1m' }
  );
  const refreshToken = jwt.sign(
    { user: data },
    process.env.JWT_SECRET
  );

  refreshTokens.push(refreshToken);

  return res.json({
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    token,
    refreshToken
  });
}

function refreshUserToken({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }

    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' }
    );

    return res.json({
      token
    });
  });
}

function logoutUser({ body: { refreshToken } }, res) {
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);
  res.send('Logout successful');
}

module.exports = {
  registerUser,
  loginUser,
  refreshUserToken,
  logoutUser,
  setRefreshToken
};
