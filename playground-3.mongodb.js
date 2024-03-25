/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('cruise-tour');

// Create a new document in the collection.
db.getCollection('users').insertOne({
  _id: ObjectId('660115fe28dce427df4f728b'),
  firstName: 'Alpha',
  lastName: 'Al',
  email: 'aalpha@testmail.com',
  password: '$2b$10$ae6SHfIfaykxxDJbOL94HOJMFJu4gOvrRZoNeQEmtqMGuJcDp04ey',
  orders: [],
  __v: 0
});
