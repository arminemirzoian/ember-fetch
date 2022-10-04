import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class CatsRoute extends Route {
  @service cats;
  async model() {
    return this.cats.content;
  }
}
