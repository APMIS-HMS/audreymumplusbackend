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
    let weeklyUpdate = {};
    try {
      const getProgress = await weeklyProgrssService.get({ _id: data.id });
      console.log('============Thanks==============\n', getProgress);
      if (getProgress._id !== undefined) {
        console.log('============I am in==============\n');
        const week = data.weeks[0].week;
        const weekData = data.weeks[0].data;
        console.log('=====================Week Sent========================', week);
        progress = getProgress.weeks;
        console.log('=====================progress========================', progress[0].data);
        console.log('=====================progress from DB========================', progress[0].week);
        //if (week === progress[0].week) {
        console.log('=====================Week is picked========================');
        weeklyUpdate.data = progress[0].data;
        weeklyUpdate.data.push(weekData);
        console.log('=========weeklyUpdate========================\n',weeklyUpdate);
        patchProgress = await weeklyProgrssService.patch(weeklyUpdate);
        console.log('==================patchProgress=========================\n', patchProgress);
        //}

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
