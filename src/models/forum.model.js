// forum-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const forum = new Schema({
    name:{type: String, unique:true, required:true },
    approved: {type: Boolean, 'default': false},
    forumMemberCount: {type: Number, 'default': 0},
    requireApprovalToJoin:{type:Boolean, 'default':true, required:false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('forum', forum);
};
