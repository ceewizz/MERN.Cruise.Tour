/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('socialnetwork');

// Create a new document in the collection.
db.getCollection('index').insertOne({
  _id: ObjectId('65dd6f2bee0e632094bb846d'),
  'const': 'const',
  router: 'userRoutes',
  '=': '=',
  'require("express")': {
    'Router();': 'require("./user-routes");'
  }
});
