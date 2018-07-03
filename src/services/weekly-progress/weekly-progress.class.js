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
    const weeklyProgrssService = this.app.service('weekly-progres');
    try {
      const addProgress = await weeklyProgrssService.create(data);
      if(addProgress._id !== undefined){
        return jsend.success(addProgress);
      }else{
        return jsend.error('Create process');
      }
    } catch (error) {
      return jsend.error(error);
    }
  }

  async update(id, data, params) {
    const weeklyProgrssService = this.app.service('weekly-progres');
    let patchProgress;
    const weeklyUpdateData = data.data;
    try {
      let getProgress = await weeklyProgrssService.find({query:{week:data.week}});
      getProgress = getProgress.data[0];
      if (getProgress._id !== undefined) {
        getProgress.data.push(weeklyUpdateData);
        patchProgress = await weeklyProgrssService.patch(getProgress._id,getProgress,{});
        return jsend.success(patchProgress);
      }
    } catch (error) {
      return jsend.error(error);
    }
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
