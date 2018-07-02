// Initializes the `weekly-progress` service on path `/weekly-progress`
const createService = require('./weekly-progress.class.js');
const hooks = require('./weekly-progress.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app:app
  };

  // Initialize our service with any options it requires
  app.use('/weekly-progress', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('weekly-progress');

  service.hooks(hooks);
};
