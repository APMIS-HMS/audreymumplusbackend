// joinForum-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const joinForum = new Schema({
    personId: { type: String, required: true },
    forumName: {type:String, required:true},
    isApproved:{type:Boolean, 'default':false, required:false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('joinForum', joinForum);
};
