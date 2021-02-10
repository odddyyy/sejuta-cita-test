'use strict';

const { User } = require(`../../database/models`);
const { uuid, bcrypt } = require(`../../helpers`);
const { Success } = require(`../../middlewares`);

module.exports = async (req, res, next) => {
  try {
    const { username, password, isAdmin } = req.body;
    const isExist = await User.findOne({ username });
    if (isExist) throw { code: 400, message: `USER_ALREADY_EXIST` };
    const newUser = await User.create({
      _id: uuid(),
      username,
      password: bcrypt.encryptPassword(password),
      isAdmin
    });
    return Success(res, 201, `USER_CREATED`, newUser);
  } catch (error) {
    return next(error);
  }
};