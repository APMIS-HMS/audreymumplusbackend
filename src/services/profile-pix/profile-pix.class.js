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
    // console.log('=======Inside profile-pix========\n','===Got the data===\n',data,'====================');
    const profileImageService = this.app.service('profile-img');
    const peopleService = this.app.service('people');
    let host = this.app.get('host');
    const port = this.app.get('port');
    let addProfilePix;
    let profileImage;
    let patchPeople ={};
    try {
      if (data.uri !== '') {
        console.log('*********Uri found***************');
        if (data.email !== '') {
          console.log('*********email found***************');
          addProfilePix = await profileImageService.create(data);
          if(addProfilePix._id !== ''){
            (host === 'localhost') ? host = `http://${host}:${port}` : host;
            console.log('THis is my host'+host);
            profileImage = `${host}/img/profile-imgs/${addProfilePix.id}`;
            console.log('=================ProfileImage Url===========\n',profileImage);
            patchPeople = await peopleService.patch(data.peopleId,{profileImage:profileImage});
            console.log('*********-------Patch People-----************\n',patchPeople);
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
