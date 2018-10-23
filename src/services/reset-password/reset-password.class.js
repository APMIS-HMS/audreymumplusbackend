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
      
      let getUser = await UserService.find({query:{email:data.email}});
 
      let id = getUser.data[0]._id;

      let name =getUser.data[0].firstName+' '+getUser.data[0].lastName;
        
      if (data.email === undefined && data.newPassword === undefined) {
        return jsend.error({ message: 'email is required!' });
      }
      if (data.newPassword === undefined && data.email !== undefined) {
        let generateToken = this.autoGeneratePassword();
        
        getUser.data[0].password = generateToken;
        let userData = getUser.data[0];
        
        //let updatePass = 
        await UserService.update(id,userData, {});
        let mailData = {
          generatedPass: generateToken,
          email: data.email,
          name: name
        };
        emailer.sendToken(mailData);

        delete mailData.generatedPass;
        
        return jsend.success(mailData);
      } 

      let getNewCredentials = await UserService.find({query:{_id:data.id}});

      if(params.headers.authorization.includes(data.accessToken)){
        return jsend.error({ message: 'Authentication of user failed!', number: 419, data: { errorDetail: 'Not a logged in user' } });
        
      }else if (data.newPassword !== data.reEnterPassword) {
        return jsend.error({ message: 'The passwords does not match' });
      } else {
        getNewCredentials.data[0].password = data.newPassword;
        let newUserData = getNewCredentials.data[0];
        let newPass = await UserService.update(id, newUserData, {});
        let mailData = {
          email: data.email,
          name: name
        };
        emailer.confirmReset(mailData);
        return jsend.success(newPass);
      }
      
    } catch (error) {
      return jsend.error({ message: 'Reset password failed!', number: 101, data: { errorDetail: error } });
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

  autoGeneratePassword() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  setup(app) {
    this.app = app;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
