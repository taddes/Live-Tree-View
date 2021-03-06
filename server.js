const express = require('express');
const mongoose = require('mongoose');
const Factory = require('./api/models/factoryListModel');
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const routes = require('./api/routes/factoryListRoutes');
const socket = require('socket.io');

// Start Express Server
const app = express();
app.use(serveStatic(__dirname + '/dist'));

// Define port
const PORT = process.env.PORT || 3000;

// Connect mongoose 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_24z0cgtp:9k2c8j1ksh0l4s16btlgt773vl@ds257470.mlab.com:57470/heroku_24z0cgtp', {}, function(error) {
  console.log(error);
});

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

// Start Server & Listener
const server = app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

// Socket.io setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log(`made socket connection: ${socket.id}`);

  // deleted factory
  socket.on('deleteFactory', (factory) => {
    // Emit this event to all clients connected
    socket.broadcast.emit('deleteFactory', factory);
  });

  // add factory
  socket.on('addFactory', (factory) => {
    // Emit this event to all clients connected
    socket.broadcast.emit('addFactory', factory);
  });

  // edit factory
  socket.on('editFactory', (factory) => {
    // Emit this event to all clients connected
    socket.broadcast.emit('editFactory', factory);
  });

  socket.on('disconnect', () => {
    console.log(`disconnected from socket id: ${socket.id}`);
  });

}); // close io.on(connection)