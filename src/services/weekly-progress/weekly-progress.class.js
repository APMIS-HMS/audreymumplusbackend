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
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    let progress;
    console.log('===================Got here==========================');
    const weeklyProgrssService = this.app.service('weekly-progres');
    let patchProgress;
    let actualWeek;
    try {
      const getProgress = await weeklyProgrssService.get({_id:data.id});
      console.log('============Thanks==============\n', getProgress);
      if (getProgress._id !== undefined) {
        console.log('============I am in==============\n');
        //const week = data.weeks.week;
        //actualWeek = getProgress.weeks;
        progress = getProgress.weeks;
        console.log('=====================progress========================',progress);
        // if (week === )
        progress.push(data);
        patchProgress = await weeklyProgrssService.patch(progress);
        console.log('==================patchProgress=========================\n', patchProgress);
      }
      return jsend(patchProgress);
    } catch (error) {
      return jsend(error);
    }
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
