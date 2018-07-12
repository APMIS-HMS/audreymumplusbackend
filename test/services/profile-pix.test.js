const assert = require('assert');
const app = require('../../src/app');

describe('\'profile-pix\' service', () => {
  it('registered the service', () => {
    const service = app.service('profile-pix');

    assert.ok(service, 'Registered the service');
  });
});
