const assert = require('assert');
const app = require('../../src/app');

describe('\'getChat\' service', () => {
  it('registered the service', () => {
    const service = app.service('get-chat');

    assert.ok(service, 'Registered the service');
  });
});
