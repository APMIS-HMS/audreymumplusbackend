/* eslint-disable no-unused-vars */
const jsend = require('jsend');
class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    let joinForumService = this.app.service('join-forum');
    let addToForum;
    if(data.personId !== undefined && data.forumName !== undefined){
      let userRequest = {
        personId:data.personId,
        forumName:data.forumName
      };
      try {
        addToForum = await joinForumService.post(userRequest);
      } catch (error) {
        return jsend.error({message:'There was an error when trying to join forum',code:204,data:{error:error}});
      }
    }
    
    return addToForum;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }

  setup(app) {
    this.app = app;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
