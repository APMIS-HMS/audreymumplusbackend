const assert = require('assert');
const app = require('../../src/app');

describe('\'joinForumChannel\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-forum-channel');

    assert.ok(service, 'Registered the service');
  });
});
