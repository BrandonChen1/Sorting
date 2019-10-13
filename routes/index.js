var express = require('express');
var router = express.Router();

function generateRandom(max){
  var arr = [];
  for(var i = 0; i < max; i++){
    arr.push(i);
  }
  for(var i = 0; i < max; i++){
    var swap = Math.floor(Math.random()*i);
    var temp;
    temp = arr[i];
    arr[i] = arr[swap];
    arr[swap] = temp;
  }
  return arr;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express', sort: generateRandom(parseInt(req.body.numArrays))});
});

module.exports = router;
