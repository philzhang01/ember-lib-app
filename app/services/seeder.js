import { action } from '@ember/object';
import { cancel, later } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Faker from 'faker';

const DONE_MESSAGE_VISIBILITY_TIME_MS = 3000;

export default class SeederService extends Service {
  @service() store;

  @tracked doneMessage;

  @tracked seedingLibrariesInProgress;
  @tracked deletingLibrariesInProgress;
  @tracked seedingAuthorsInProgress;
  @tracked deletingAuthorsInProgress;

  visibilityTimer = DONE_MESSAGE_VISIBILITY_TIME_MS;

  @action
  showDone(message) {
    this.doneMessage = message;

    cancel(this._runLater);
    this._runLater = later(() => (this.doneMessage = ''), this.visibilityTimer);
  }

  @action
  async seedRandomlibraries(volume) {
    this.seedingLibrariesInProgress = true;

    const counter = parseInt(volume, 10);
    const listOfNewRandomLibraryPromises = range(counter).map(() => this._createAndSaveRandomLibrary());
  }

  // Create a new library record, it uses our randomize function from our LibraryModel, which
  // generates some fake data in the new record. The save method is a Promise, so we return a
  // Promise. For this reason the function can be async.
  async _createAndSaveRandomLibrary() {
    return this.store.createRecord('library').randomize().save();
  }

  async _createAndSaveRandomAuthor() {
    return this.store.createRecord('author').randomize().save();
  }

  async _createAndSaveRandomBook(author, library) {
    return this.store.createRecord('book').randomize(author, library).save();
  }
}
