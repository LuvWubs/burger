const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {
  var foodObj;
  burger.all(function(obj) {
    foodObj = {
      burgers: obj
    };
    // console.log('foodObj from bc13 burger.all: ', foodObj);
  });
  // console.log('data: ', data);
  res.render('index', foodObj);
});

router.post('/', function(req, res) {
  // console.log('req.body.userBurger: ', req.body);
  burger.insertOne([
    'burger_name', 'devoured'
  ], [
    req.body.userBurger, 0
  ], function(result) {
    console.log('post method result: ', result);
    // res.json({id: result});
    // res.json(result);
  });
});

router.put('/', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete('/', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.delete({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
