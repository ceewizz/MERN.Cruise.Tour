/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('cruise-tour');

// Create a new document in the collection.
db.getCollection('users').insertOne({
  _id: ObjectId('660115fe28dce427df4f7288'),
  firstName: 'Chris',
  lastName: 'Huynh',
  email: 'chris@testmail.com',
  password: '$2b$10$/P776LuM63pTC7j0ctItDOBQJxYxx7NJT/SJb8gO4VhnO7UQnqHNO',
  orders: [
    {
      products: [
        ObjectId('660115fe28dce427df4f727e'),
        ObjectId('660115fe28dce427df4f727e'),
        ObjectId('660115fe28dce427df4f727f')
      ],
      _id: ObjectId('660115fe28dce427df4f7289'),
      purchaseDate: ISODate('2024-03-25T06:13:18.625Z')
    }
  ],
  __v: 0
});
