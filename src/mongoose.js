const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://lizzy:lizzy081@ds159020.mlab.com:59020/audrey-mum';

module.exports = function (app) {
  mongoose.connect(MONGODB_URI);
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
