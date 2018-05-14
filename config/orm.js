var connect = require('./connection.js');

var orm = {
 all: function(table, cb) {
   var queryString = 'SELECT * FROM ' + table + ';';
   connect.query(queryString, function(result) {
     cb(result);
   });
 },
 create: function(table, name, eaten, cb) {
   var queryString = 'INSERT INTO ' + table + '  (burger_name, devoured) VALUES (' + name + ',' + eaten + ');';
   connect.query(queryString,
     // [table, name, eaten],
     function(err, results) {
     if (err) throw err;
     cb(results);
   });
 },
 update: function(table, name, eaten, cb) {
   var queryString = 'UPDATE ' + table + ' SET ' + name + ' WHERE ' + eaten;
   connect.query(queryString,
     // [table, name, eaten],
     function(err, res) {
     if (err) throw err;
     cb(res);
   });
 },
 delete: function(table, name, del, cb) {
   var queryString = 'DELETE FROM ' + table + ' WHERE ' + del;
   connect.query(queryString,
     // [table, name, del],
     function(err, res) {
     if (err) throw err;
     cb(res);
   })
 }
}

module.exports = orm;
