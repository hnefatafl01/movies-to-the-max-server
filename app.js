require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000
// https://movies-to-the-max.firebaseapp.com/
const corsOptions = {
  "origin": '*',
  "methods": 'GET, POST',
  "allowedHeaders": ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  "credentials": true,
  "optionsSuccessStatus": 204
};

const routes = require('./routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('*', cors(corsOptions));


app.use('/', routes);

app.listen(port, () => {
  console.log('listening on port ', port);
});
