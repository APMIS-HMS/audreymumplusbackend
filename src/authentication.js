const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
//const socketio = require('@feathersjs/socketio');



module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());
  //app.configure(socketio());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [
        context => {
          context.result.user = context.params.user;
          console.log('*****************Successful login**************');
          app.on('connection', function (socket) {
            console.log('--------------Inside connection-------------\n', socket);
            socket.emit('news', { text: 'A client connected!' });
            socket.send('===================Login successful==================');
            socket.on('feedback', function (connected) {
              console.log('==========Inside App.js===========', connected);
            });
          });
          // Registering Socket.io middleware
          app.use(function (socket, next) {
            // Exposing a request property to services and hooks
            socket.feathers.referrer = socket.request.referrer;
            next();
          });
          // Don't expose sensitive information.
          delete context.result.user.password;
        }
      ]
    }
  });
};
