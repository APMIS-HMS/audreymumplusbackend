const people = require('./people/people.service.js');
const packApplication = require('./pack-application/pack-application.service.js');
const journal = require('./journal/journal.service.js');
const devMilestone = require('./dev-milestone/dev-milestone.service.js');
const chat = require('./chat/chat.service.js');
const broadcast = require('./broadcast/broadcast.service.js');
const forum = require('./forum/forum.service.js');
const users = require('./users/users.service.js');
const savePerson = require('./save-person/save-person.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(people);
  app.configure(packApplication);
  app.configure(journal);
  app.configure(devMilestone);
  app.configure(chat);
  app.configure(broadcast);
  app.configure(forum);
  app.configure(users);
  app.configure(savePerson);
};
