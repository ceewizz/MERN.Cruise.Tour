/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('cruise-tour');

// Create a new document in the collection.
db.getCollection('categories').insertOne({
  _id: ObjectId('660115fe28dce427df4f7278'),
  name: 'Group',
  __v: 0
});
