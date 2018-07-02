const assert = require('assert');
const app = require('../../src/app');

describe('\'weekly-progress\' service', () => {
  it('registered the service', () => {
    const service = app.service('weekly-progress');

    assert.ok(service, 'Registered the service');
  });
});
