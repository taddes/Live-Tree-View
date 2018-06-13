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
app.use(express.static(__dirname + '/dist'));

// Define port
const PORT = process.env.MONGODB_URI || 3000;

// Connect mongoose 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_24z0cgtp:9k2c8j1ksh0l4s16btlgt773vl@ds257470.mlab.com:57470/heroku_24z0cgtp');

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
    console.log(`socket deleteFactory event`)
    // Emit this event to all clients connected
    io.emit('deleteFactory', factory);
    console.log(`socket deleteFactory emission!`)
  });

// add factory
socket.on('addFactory', (factory) => {
  console.log(`socket addFactory event`)
  // Emit this event to all clients connected
  io.emit('addFactory', factory);
  console.log(`socket addFactory emission!`)
});

// edit factory
socket.on('editFactory', (factory) => {
  console.log(`socket editFactory event`)
  // Emit this event to all clients connected
  io.emit('editFactory', factory);
  console.log(`socket editFactory emission!`)
});

  socket.on('disconnect', () => {
    console.log(`disconnected from socket id: ${socket.id}`);
  });

});
