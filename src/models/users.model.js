// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new mongooseClient.Schema({
    email: { type: String, unique: true, required: true },
    personId:{type:Schema.Types.ObjectId, required: true},
    password: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    profileImage:{type:Schema.Types.Mixed, required:false}

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
