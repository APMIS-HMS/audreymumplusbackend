/* eslint-disable no-unused-vars */
const emailer = require('../../custom/emailer');
let jsend = require('jsend');
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
    let UserService = this.app.service('users');

    try {
      //
      if (data.email === undefined) {
        return jsend.error({ message: 'email is required!' });
      }
      if (data.token === null) {
        let generateToken = this.autoGeneratePassword();
        let updatePass = await UserService.update(data.id, { password: generateToken }, {});
        console.log('After update:===\n',updatePass);
        let mailData = {
          generatedPass: generateToken,
          email: data.email
        };
        emailer.sendToken(mailData);
      } else {
        if (data.newPassword !== data.reEnterPassword) {
          return jsend.error({ message: 'The passwords does not match' });
        } else {
          let newPass = await UserService.update(data.id, { password:data.newPassword }, {});
          console.log('After update:===\n',newPass);
          return newPass;
        }
      }
    } catch (error) {
      return jsend.error({ message: 'Reset password failed!', number: 101, data: { errorDetail: error } });
    }

    //return data;
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

  autoGeneratePassword() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
