'use strict';

module.exports = (res, code, message, data) => {
  return res.status(code).json({ message, data });
};