// people-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const people = new Schema({
    apmisId: { type: String, required: true },
    personId:{type: String, required: false},
    title:{type: String, required: true},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type:String, required: true},
    dateOfBirth:{type: Date,'default':Date.now, required: true},
    motherMaidenName:{type: String, required: true},
    primaryContactPhoneNo:{type: String, required: true},
    spousefullname:{type: String, required: false},
    spousephone:{type: String, required: false},
    hospitalname:{type: String, required: false},
    hospitalstate:{type: String, required: false},
    profileImage:{type:Schema.Types.Mixed, required:false},
    forums:[
      {
        name:{ type: String, required:false}
      }
    ],
    ExpectedDateOfDelivery: { type: Date, required: false },
    noOfPreviousChildren: { type: Number,'default':0, required: false },
    isActive: { type: Boolean, 'default':true, required: false },
    week: {type: String, 'default': 'Week 1', required: false},
    day: {type: Number, 'default': 1, required: false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('people', people);
};