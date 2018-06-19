/* eslint-disable no-unused-vars */
const request = require('request-promise');
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

    const peopleService = this.app.service('people');
    const userService = this.app.service('users');

    // APMIS  End point
    const url =`${process.env.APMIS_PERSON}/save-person`;
    const person = data;

    try {
      const makeRequest = await this.personOptions(url, person);
      console.log('Logs ================\n', makeRequest);
      // Convert callback from APMIS (makeRquest) to JSON
      const parseRequest = JSON.parse(makeRequest);
      
      // Verify if the request to APMIS was successful
      if (parseRequest._id === undefined) {
        // Request failed! Terminate process
        return jsend.error('Could not initiate request');
      }
      else {
        //Request Successfully initiated. Proceed. Initialise variabls
        const user = {
          email: parseRequest.email,
          password: parseRequest.password
        };

        const people = {
          apmisId: parseRequest.apmisId,
          personId: parseRequest._id,
        };

        // Create record on people's collection
        
        const peopleRes = await peopleService.create(people);

        // Create record in User's collection

        const userRes = await userService.create(user);
        
        //Prepare response

        const res = {
          people: peopleRes,
          user: userRes
        };

        // Return successfull response and terminate process

        return jsend.success(res);
      }
    } catch (error) {
      // Return error response and terminate the process
      return jsend.error(error);
    }
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

  personOptions(url, data) {
    const options = {
      method: 'POST',
      uri: url,
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
    };
    return request(options);
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
