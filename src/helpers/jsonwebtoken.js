'use strict';

const jwt = require(`jsonwebtoken`);
const secretKey = process.env.JWT_SECRET;

const signAccessToken = (payload) => {
  return jwt.sign(payload, secretKey, {
    expiresIn: '2h'
  });
};

const signRefreshToken = (payload) => {
  return jwt.sign(payload, secretKey, {
    expiresIn: '1w'
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { signAccessToken, signRefreshToken, verifyToken };