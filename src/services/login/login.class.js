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
    const authenticationService = this.app.service('authentication');
    //const peopleService = this.app.service('people');
    //const userService = this.app.service('user');

    try {
      const login = await authenticationService({ email: data.email, password: data.password } );

      if (login.accessToken !== undefined) {
        console.log('Wawu! Successful login!', login);
        return jsend.success(login);
        // const getUserdetail = await peopleService.get(login);
      }
    } catch (error) {
      return jsend.error(error);
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
