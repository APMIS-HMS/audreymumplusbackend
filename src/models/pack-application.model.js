// packApplication-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const packApplication = new Schema({
    apmisId: { type: String, required: true },
    transactions: [{
      isAccepted: { type: String, required: true },
      packageType: { type: String, required: true },
      datetime: { type: String, required: true }
    }],
    datetime: { type: Date, 'default': Date.now, required: true },
    isActive: { type: Boolean, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('packApplication', packApplication);
};