// forum-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const forum = new Schema({
    name:{type: String, unique:true, required:true },
    chatId:{type:Schema.Types.ObjectId, required:false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('forum', forum);
};
