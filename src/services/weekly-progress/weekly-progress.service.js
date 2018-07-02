// Initializes the `weekly-progress` service on path `/weekly-progress`
const createService = require('feathers-mongoose');
const createModel = require('../../models/weekly-progress.model');
const hooks = require('./weekly-progress.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/weekly-progress', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('weekly-progress');

  service.hooks(hooks);
};
