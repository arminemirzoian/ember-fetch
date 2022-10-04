import { module, test } from 'qunit';
import { setupTest } from 'fetch-data/tests/helpers';

module('Unit | Service | cats', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:cats');
    assert.ok(service);
  });
});
