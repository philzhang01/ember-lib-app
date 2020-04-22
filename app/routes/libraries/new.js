import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesNewRoute extends Route {
  model() {
    return this.store.createRecord('library');
  }

  @action
  willTransition() {
    //removes the record if the record from the store
    //if the model 'isNew'
    this.controller.model.rollbackAttributes();
  }
}
