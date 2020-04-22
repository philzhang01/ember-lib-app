import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesNewController extends Controller {
  @action
  saveLibrary(newLibrary) {
    newLibrary.save().then(() => this.transition('libraries'));
  }
}
