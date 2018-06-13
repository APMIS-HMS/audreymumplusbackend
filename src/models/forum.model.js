// forum-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const forum = new Schema({
    chat: [{
      text: { type: String, required: true },
      peopleId: { type: String, required: true }
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('forum', forum);
};
