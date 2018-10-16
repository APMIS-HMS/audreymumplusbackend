// Initializes the `getChat` service on path `/get-chat`
const createService = require('./get-chat.class.js');
const hooks = require('./get-chat.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/get-chat', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('get-chat');

  service.hooks(hooks);
};
