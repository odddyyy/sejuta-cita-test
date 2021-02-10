'use strict';

const router = require(`express`).Router();

const auth = require(`./auth`);
const user = require(`./user`);

router
  .use(`/auth`, auth)
  .use(`/user`, user);

module.exports = router;