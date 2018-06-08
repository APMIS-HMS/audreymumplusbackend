// people-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const people = new Schema({
    apmisId: { type: String, required: true },
    ExpectedDateOfDelivery: { type: Date, 'default':Date.now, required: true },
    noOfPreviousChildren: { type: Number,'default':0, required: true },
    isActive: { type: Boolean, 'default':true, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('people', people);
};



