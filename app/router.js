import EmberRouter from '@ember/routing/router';
import config from 'fetch-data/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  Router.map(function () {
    this.route('photos', function () {
      this.route('edit', { path: '/:photo_id' });
    });
  });
  this.route('favorite-posts');
  this.route('about');
  this.route('contact');
  this.route('cats');
});
