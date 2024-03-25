/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('config');

// Create a new document in the collection.
db.getCollection('system.sessions').insertOne({
  _id: {
    id: UUID('3e5cb525-131f-4092-a960-f3210bf7daa3'),
    uid: BinData(0, '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=')
  },
  lastUse: ISODate('2024-03-25T06:08:53.081Z')
});
