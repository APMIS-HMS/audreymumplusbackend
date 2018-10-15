/* eslint-disable no-unused-vars */
const request = require('request-promise');
const jsend = require('jsend');
const sms = require('../../custom/sms-sender');

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

    const email = data.person.email;

    try {
      const getUser = await userService.find({ query: { email: email } });
      if (getUser.data.length > 0) {
        return jsend.error('User email already exist');
      } else {
        // APMIS  End point
        const url = `${process.env.APMIS_PERSON}/save-person`;
        const person = data;

        let res = {};


        try {
          const makeRequest = await this.personOptions(url, person);
          // Convert callback from APMIS (makeRquest) to JSON
          const parseRequest = JSON.parse(makeRequest);
          //Verify if the request to APMIS was successful
          if (parseRequest._id === undefined) {
            // Request failed! Terminate process
            return jsend.error('Could not initiate request');
          }
          else {
            //Request Successfully initiated. Proceed. Initialise variables

            const people = {
              apmisId: parseRequest.apmisId,
              personId: parseRequest._id,
              title: parseRequest.title,
              firstName: parseRequest.firstName,
              lastName: parseRequest.lastName,
              email: parseRequest.email,
              dateOfBirth: parseRequest.dateOfBirth,
              motherMaidenName: parseRequest.motherMaidenName,
              primaryContactPhoneNo: parseRequest.primaryContactPhoneNo,
            };
            //Request Successfully initiated. Proceed. Initialise variables
            const user = {
              email: parseRequest.email,
              personId: parseRequest._id,
              password: data.person.password,
              firstName: parseRequest.firstName,
              lastName: parseRequest.lastName
            };

            // Create record in User's collection
            let userRes;

            let peopleRes;

            // Create record on people's collection
            try {
              peopleRes = await peopleService.create(people);

              userRes = await userService.create(user);
            } catch (error) {
              res = JSON.stringify(error, null, 2);
              const response = JSON.parse(res);
              const errorBody = JSON.parse(response.response.body);
              return jsend.error({
                statusCode: errorBody.code,
                status: response.message.name,
                name: errorBody.name,
                message: errorBody.message,
                errorClass: errorBody.className
              });
            }


            // const user = {
            //   email: parseRequest.email,
            //   personId:parseRequest._id,
            //   password: data.person.password,
            //   firstName:parseRequest.firstName,
            //   lastName:parseRequest.lastName
            // };

            // try {
            //   userRes = await userService.create(user);
            // } catch (error) {
            //   res = JSON.stringify(error, null, 2);
            //   const response = JSON.parse(res);
            //   const errorBody = JSON.parse(response.response.body);
            //   return jsend.error({
            //     statusCode: errorBody.code,
            //     status: response.message.name,
            //     name: errorBody.name,
            //     message: errorBody.message,
            //     errorClass:errorBody.className
            //   });
            // }


            //Delete password from response
            delete userRes.password;
            //Prepare response
            let msg = {
              primaryContactPhoneNo: parseRequest.primaryContactPhoneNo,
              message: 'Thank you for signing up on audrey mum-plus'
            };
            res = {
              people: peopleRes,
              user: userRes
            };

            sms.sendPatientDetail(msg);
            // Return successfull response and terminate process
            return jsend.success(res);
          }
        } catch (error) {
          //Initialise error response message
          res = JSON.stringify(error, null, 2);
          const response = JSON.parse(res);
          const errorBody = JSON.parse(response.response.body);

          // Return error response and terminate the process
          return jsend.error({
            statusCode: errorBody.code,
            status: response.message.name,
            name: errorBody.name,
            message: errorBody.message,
            errorClass: errorBody.className
          });
        }
      }
    } catch (error) {
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
