var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    // console.log('obj sent from bc: ', obj);
    orm.all('burgers', function(err, res) {
      if (err) throw err;
      // var idCount = 0;
      // burgers.forEach(function(idCount) {
      //   idCount += 1);
      //   console.log(burger_name, idCount);
      // }
      cb(res);
      // console.log('res from burger burger.all: ', res);
      // res.end;
    })
  },
  insertOne: function(table, name, eaten, cb) {
    // console.log('....orm.create: ', name, eaten);
    orm.create('burgers', name, eaten, function(res) {
      cb(res);
    });
  },
  updateOne: function(table, name, eaten, cb) {
    orm.update('burgers', name, eaten, function(res) {
      cb(res);
    });
  },
  delete: function(table, name, eaten, cb) {
    orm.delete('burgers', eaten, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
