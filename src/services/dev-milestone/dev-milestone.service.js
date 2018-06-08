// Initializes the `devMilestone` service on path `/dev-milestone`
const createService = require('feathers-mongoose');
const createModel = require('../../models/dev-milestone.model');
const hooks = require('./dev-milestone.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dev-milestone', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('dev-milestone');

  service.hooks(hooks);
};
