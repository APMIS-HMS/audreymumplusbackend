// profile-img-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const profileImg = new Schema({
    senderEmail:{type:String, required:true},
    uri: { type: String, required: false },
    size: { type: Number, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('profileImg', profileImg);
};
