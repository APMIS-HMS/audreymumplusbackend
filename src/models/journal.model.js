// journal-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const journal = new Schema({
    peopleId: { type: String, required: true },
    mood: { type: String, required: true },
    babyMovement: { type: String, required: true },
    weight: { type: String, required: true },
    symptoms: { type: String, required: true },
    cravings: { type: String, required: true },
    blob: { type: String, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('journal', journal);
};