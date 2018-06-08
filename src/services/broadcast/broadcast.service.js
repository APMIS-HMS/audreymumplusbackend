// Initializes the `broadcast` service on path `/broadcast`
const createService = require('feathers-mongoose');
const createModel = require('../../models/broadcast.model');
const hooks = require('./broadcast.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/broadcast', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('broadcast');

  service.hooks(hooks);
};
