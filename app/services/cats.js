import Service from '@ember/service';

export default class CatsService extends Service {
  emptyList = [{ name: '1' }, { name: '2' }];

  get content() {
    return fetch(
      'https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_Qy1NFNgoWujuRJ5sF27vP4D190WKpNO9XX6OwgXzKF7XsvJEqgl0wTHpDDv6xaQn'
    ).then((res) => res.json());
  }
}
