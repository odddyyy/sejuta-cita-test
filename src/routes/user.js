'use strict';

const router = require(`express`).Router();
const { User } = require(`../controllers`);

router
  .post(`/create`, User.CreateUser)

module.exports = router;