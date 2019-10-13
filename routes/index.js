var express = require('express');
var router = express.Router();
var sorts = require('../public/javascripts/sorts.js');

function bubblesort(arr) {
  var copy =[...arr];
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length; j > i ; j--) {
      if(copy[j] < copy[j-1]){
        var temp = copy[j];
        copy[j] = copy[j-1];
        copy[j-1] = temp;
      }
    }
    console.log(copy)
  }
  return copy
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', sort: sorts, bubble: bubblesort(sorts)});
});

module.exports = router;
