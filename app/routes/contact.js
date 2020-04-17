import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactRoute extends Route {
  model() {
    return this.store.createRecord('contact');
  }

  @action
  willTransition() {
    let model = this.controller.get('model');
    if (model.isNew) {
      model.destroyRecord();
    }
    this.controller.set('responseMessage', false);
  }
}

//done
