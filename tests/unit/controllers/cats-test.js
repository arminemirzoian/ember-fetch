import { module, test } from 'qunit';
import { setupTest } from 'fetch-data/tests/helpers';

module('Unit | Controller | cats', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cats');
    assert.ok(controller);
  });
});
