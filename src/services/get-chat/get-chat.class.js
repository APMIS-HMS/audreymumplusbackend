/* eslint-disable no-unused-vars */
const jsend = require('jsend');
class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app){
    this.app = app;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    const chatService = this.app.service('chat');
    try {
      let getChat = await chatService.find({query:{forumName:data.forumName,$and: [{
        updatedAt: {
          $gte: data.createdAt
        }
      }]}});

      return jsend.success(getChat);
    } catch (error) {
      return jsend.error({message:'Could not pull chat',code:519,data:{error:error}});
    }
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
