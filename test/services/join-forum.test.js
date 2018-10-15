const assert = require('assert');
const app = require('../../src/app');

describe('\'joinForum\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-forum');

    assert.ok(service, 'Registered the service');
  });
});
