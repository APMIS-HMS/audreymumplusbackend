// Initializes the `joinForumChannel` service on path `/join-forum-channel`
const createService = require('./join-forum-channel.class.js');
const hooks = require('./join-forum-channel.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app:app
  };

  // Initialize our service with any options it requires
  app.use('/join-forum-channel', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-forum-channel');

  service.hooks(hooks);
};
