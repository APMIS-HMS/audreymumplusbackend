const assert = require('assert');
const app = require('../../src/app');

describe('\'devMilestone\' service', () => {
  it('registered the service', () => {
    const service = app.service('dev-milestone');

    assert.ok(service, 'Registered the service');
  });
});
