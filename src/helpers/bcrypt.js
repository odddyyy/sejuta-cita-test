'use strict';

const bcrypt = require(`bcrypt`);

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (dbPassword, password) => {
  return bcrypt.compareSync(password, dbPassword);
};

module.exports = { encryptPassword, comparePassword };