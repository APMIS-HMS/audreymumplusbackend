// chat-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const chat = new Schema({
    forumName:{type:String, required:false},
    message: [{
      text: { type: String, required: true },
      email: { type: String, required: true }
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('chat', chat);
};
