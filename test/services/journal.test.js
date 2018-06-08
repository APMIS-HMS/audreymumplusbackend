const assert = require('assert');
const app = require('../../src/app');

describe('\'journal\' service', () => {
  it('registered the service', () => {
    const service = app.service('journal');

    assert.ok(service, 'Registered the service');
  });
});
