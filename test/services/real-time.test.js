const assert = require('assert');
const app = require('../../src/app');

describe('\'real-time\' service', () => {
  it('registered the service', () => {
    const service = app.service('real-time');

    assert.ok(service, 'Registered the service');
  });
});
