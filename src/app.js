'use strict';

require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const logger = require(`morgan`);
const db = require(`./database/connection`);
const mainRoute = require(`./routes`);
const { ErrorHandler } = require(`./middlewares`);

const app = express();
const port = process.env.PORT || 8081;

db();

app
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(logger(`dev`));

app
  .use(`/`, mainRoute)
  .use(ErrorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});