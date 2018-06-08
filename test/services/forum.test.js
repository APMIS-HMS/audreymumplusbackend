const assert = require('assert');
const app = require('../../src/app');

describe('\'forum\' service', () => {
  it('registered the service', () => {
    const service = app.service('forum');

    assert.ok(service, 'Registered the service');
  });
});
