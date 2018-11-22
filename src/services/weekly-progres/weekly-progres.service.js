// Initializes the `weekly-progres` service on path `/weekly-progres`
const createService = require('feathers-mongoose');
const createModel = require('../../models/weekly-progres.model');
const hooks = require('./weekly-progres.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/weekly-progres', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('weekly-progres');

  service.hooks(hooks);
};
