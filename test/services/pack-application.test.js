const assert = require('assert');
const app = require('../../src/app');

describe('\'packApplication\' service', () => {
  it('registered the service', () => {
    const service = app.service('pack-application');

    assert.ok(service, 'Registered the service');
  });
});
