const express = require('express');
const mongoose = require('mongoose');
const Factory = require('./api/models/factoryListModel')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start Express Server
const app = express();

// Define Port
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('GET request');
})

// Set public folder, may need to change
app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Factorydb')
// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable Cors
// app.use(cors());

// Start Server & Listener


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})











/*const express = require('express');
const path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// Ititialize Express Server
const app = express();
const factory = require('./routes/factory');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/factories', express.static(path.join(__dirname, 'dist')));
app.use('/factory', factory);

// 404 Catch
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') ===

});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})
*/