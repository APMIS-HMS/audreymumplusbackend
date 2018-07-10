const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('winston');
require('dotenv').config();

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const mongoose = require('./mongoose');

const authentication = require('./authentication');

const app = express(feathers());



// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio((function (io) {
  io.on('connection', function (socket) {
    
    socket.on('getForums',function(getForums){
      new Promise ((resolve) => {
        const getF = app.service('forum').find();
        resolve(getF);
      }).then((forums) => {
        socket.emit('getForums', forums);
      });
      
      // var promise1 = new Promise((resolve, reject) => {
      //   const getForums = app.service('forum').find();

      //   if (getForums.length > 0) {
      //     resolve(getForums);
      //   } else {
      //     reject({message: 'No forums found'});
      //   }
      // });

      // promise1.then((data) => {
      //   console.log('____)))))forums(((((((_______', data);
      //   socket.emit('getForums', data);
      // }, (error) => {
      //   console.log('______(((((forums error)))))))_______', error);
      //   socket.emit('getforums', error);
      // });
      
    });
    socket.emit('forums', { text: 'Hey Thad!' });
    socket.on('feedback', function (connected) {
      console.log('==========connected===========', connected);
    });
    socket.on('chat', function (user) {
      app.service('chat').create(user);
      console.log('==========**user***===========', user);
    });

    app.service('chat').publish('created', (data, context) => {
      socket.broadcast.emit('created', { message: data });
      //const user = context.params.user;
      //return app.publish(app.channel('authenticated'));
      return app.publish(data);
      //return app.channel(data.text);
    });
  });



  // Registering Socket.io middleware
  io.use(function (socket, next) {
    // Exposing a request property to services and hooks
    socket.feathers.user = socket.request.user;
    next();
  }
  );
}
)));

app.configure(mongoose);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);
// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;