import Component from '@glimmer/component';
import { action } from '@ember/object';
import { lte, not, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

const MAX_VALUE = 100;

export default class SeederBlockComponent extends Component {
  @service('seeder') seederService;
  @tracked counter = null;
  @tracked readyMessage;

  @lte('counter', MAX_VALUE) isCounterValid;
  @not('isCounterValid') isCounterNotValid;

  placeholder = `MAX ${MAX_VALUE}`;

  @tracked generateInProgress = false;
  @tracked deleteInProgress = false;

  @or('isCounterNotValid', 'generateInProgress', 'deleteInProgress') generateIsDisabled;
  @or('generateInProgress', 'deleteInProgress') deleteIsDisabled;

  seederFn = this.args.seederFn;
  destroyerFn = this.args.destroyerFn;

  @action
  generate() {
    if (this.counter && this.isCounterValid) {
      this.seederFn(this.counter);
    }
  }

  @action
  delete() {
    this.destroyerFn();
  }
}
// done
