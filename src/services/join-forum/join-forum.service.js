// Initializes the `joinForum` service on path `/join-forum`
const createService = require('feathers-mongoose');
const createModel = require('../../models/join-forum.model');
const hooks = require('./join-forum.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/join-forum', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-forum');

  service.hooks(hooks);
};
