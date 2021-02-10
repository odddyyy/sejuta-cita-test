'use strict';

module.exports = (err, req, res, next) => {
  if (err.name) return res.json(err);
  else return res.status(err.code).json({ message: err.message, data: err.data });
}