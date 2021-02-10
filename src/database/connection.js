'use strict';
require(`dotenv`).config();

const mongoose = require(`mongoose`);

module.exports = () => {
  mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true,
    useUnifiedTopology: true}, (err) => {
        if (!err) console.log('database connected');
        else console.error('database failed to connect\n', err);
    });
};