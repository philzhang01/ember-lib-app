import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesIndexController extends Controller {
  @action
  deleteLibrary(library) {
    const confirmation = confirm('Are you sure?');

    if (confirmation) {
      library.destroyRecord();
    }
  }
}
