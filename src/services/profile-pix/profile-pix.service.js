// Initializes the `profile-pix` service on path `/profile-pix`
const createService = require('./profile-pix.class.js');
const hooks = require('./profile-pix.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app:app
  };

  // Initialize our service with any options it requires
  app.use('/profile-pix', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('profile-pix');

  service.hooks(hooks);
};
