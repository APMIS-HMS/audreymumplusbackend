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
    const profileImageService = this.app.service('profile-pix');
    const peopleService = this.app.service('people');
    let host = this.app.get('host');
    const port = this.app.get('port');
    let addProfilePix;
    let profileImage;
    let patchPeople ={};
    try {
      if (data.uri !== '') {
        if (data.email !== '') {
          addProfilePix = await profileImageService.create(data);
          if(addProfilePix._id !== ''){
            (host === 'localhost') ? host = `http://${host}:${port}` : host;
            profileImage = `${host}/img/products/${addProfilePix.id}`;
            patchPeople = await peopleService.patch(data.peopleId,{profileImage:profileImage});
            return jsend.success(patchPeople);
          }else{
            return jsend.error('upload failed!');
          }
          
        } else {
          return jsend.error('email field is required!');
        }
      } else {
        return jsend.error('uri field is required!');
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
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
