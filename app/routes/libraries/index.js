import Route from '@ember/routing/route';

export default class LibrariesIndexRoute extends Route {
  model() {
    return this.store.findAll('library');
  }
}
