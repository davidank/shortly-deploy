// var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = require('bluebird'); //..???

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('we\'re connected!');

  // var UrlsSchema = mongoose.Schema({
  //   url: String,
  //   baseUrl: String,
  //   code: String,
  //   title: String,
  //   visits: Number,
  //   date: { type: Date, default: Date.now }
  // });

  // var UsersSchema = mongoose.Schema({
  //   username: String,
  //   password: String,
  //   date: { type: Date, default: Date.now }
  // });
  // console.log('loaded all schemas');

  // var usersTest = mongoose.model('usersTest', UsersSchema);

  // var example = new usersTest({
  //   username: 'david',
  //   password: 'theshadow'
  // });

  // example.save(function(err, example) {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   console.log('sucessfully saved');
  // });

});


module.exports = db;







// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });
