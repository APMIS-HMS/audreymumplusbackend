/* eslint-disable no-unused-vars */
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

  create(data, params) {
    let cons = this.app.channel('authenticated').connections;

    let consFilter = cons.filter(connect => connect.user._id.toString() === data.userId.toString());

    let loggedInUser;
    if (consFilter.length > 0) {
      loggedInUser = consFilter[0];

      let channel = this.app.channel(data.email);
      let authenticatedChannel = this.app.channel('authenticated');
      authenticatedChannel.leave(loggedInUser);
    }
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
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
