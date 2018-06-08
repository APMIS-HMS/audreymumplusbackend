// Initializes the `packApplication` service on path `/pack-application`
const createService = require('feathers-mongoose');
const createModel = require('../../models/pack-application.model');
const hooks = require('./pack-application.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pack-application', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('pack-application');

  service.hooks(hooks);
};
