/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('config');

// Create a new document in the collection.
db.getCollection('system.sessions').insertOne({
  _id: {
    id: UUID('7315eee9-0cdd-4c89-bc17-5460ced73005'),
    uid: BinData(0, '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=')
  },
  lastUse: ISODate('2024-03-25T06:18:53.081Z')
});
