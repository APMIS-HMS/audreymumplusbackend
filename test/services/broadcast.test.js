const assert = require('assert');
const app = require('../../src/app');

describe('\'broadcast\' service', () => {
  it('registered the service', () => {
    const service = app.service('broadcast');

    assert.ok(service, 'Registered the service');
  });
});
