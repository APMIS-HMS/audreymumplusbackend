const assert = require('assert');
const app = require('../../src/app');

describe('\'savePerson\' service', () => {
  it('registered the service', () => {
    const service = app.service('save-person');

    assert.ok(service, 'Registered the service');
  });
});
