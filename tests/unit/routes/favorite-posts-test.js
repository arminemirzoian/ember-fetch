import { module, test } from 'qunit';
import { setupTest } from 'fetch-data/tests/helpers';

module('Unit | Route | favorite-posts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:favorite-posts');
    assert.ok(route);
  });
});
