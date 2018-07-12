const assert = require('assert');
const app = require('../../src/app');

describe('\'profile-img\' service', () => {
  it('registered the service', () => {
    const service = app.service('profile-img');

    assert.ok(service, 'Registered the service');
  });
});
