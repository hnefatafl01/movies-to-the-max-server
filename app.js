require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "credentials":"true",
  "preflightContinue": true,
  "optionsSuccessStatus": 204
}));

app.use('/', routes);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
