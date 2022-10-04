import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class PhotosRoute extends Route {
  async model() {
    console.log('works');
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return response.json();
  }
}
