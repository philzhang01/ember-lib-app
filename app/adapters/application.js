// import FirestoreAdapter from 'emberfire/adapters/firestore';

// export default FirestoreAdapter.extend({
//     // Uncomment the following lines to enable offline persistence and multi-tab support
//     // enablePersistence: true,
//     // persistenceSettings: { synchronizeTabs: true }
// });

import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default class ApplicationAdapter extends RealtimeDatabaseAdapter {}
