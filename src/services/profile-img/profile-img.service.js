// Initializes the `profile-img` service on path `/profile-img`
const createService = require('feathers-mongoose');
const createModel = require('../../models/profile-img.model');
const hooks = require('./profile-img.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/img/profile-imgs');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/profile-img', blobService({Model:blobStorage}));

  // Get our initialized service so that we can register hooks
  const service = app.service('profile-img');

  service.hooks(hooks);
};
