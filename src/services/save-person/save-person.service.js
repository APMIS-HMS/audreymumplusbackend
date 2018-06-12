// Initializes the `savePerson` service on path `/save-person`
const createService = require('./save-person.class.js');
const hooks = require('./save-person.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app:app
  };

  // Initialize our service with any options it requires
  app.use('/save-person', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('save-person');

  service.hooks(hooks);
};
