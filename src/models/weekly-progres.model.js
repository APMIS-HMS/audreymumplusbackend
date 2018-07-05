// weekly-progress-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const weeklyProgress = new Schema({
    week: { type: Number, required: true },
    data: [{
      day: { type: Number, required: true },
      title: { type: String, required: true },
      intro: { type: String, required: true },
      body: { type: String, required: true }
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('weeklyProgress', weeklyProgress);
};