require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const server = require('http').Server(app);
const port = process.env.PORT || 3000
const corsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:4200',
  // preflightContinue: false
};

const routes = require('./routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors(corsOptions));
app.use('*', cors(corsOptions));


app.use('/', routes);

app.listen(port, () => {
  console.log('listening on port ', port);
});


// module.exports = {
//   app,
//   server
// }
