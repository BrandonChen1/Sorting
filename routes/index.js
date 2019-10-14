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
  res.render('index', { title: 'SORTING!', numArrays: '50', sortSpeed: '500'});
});

router.post('/', function(req, res, next) {
  var arr = generateRandom(parseInt(req.body.numArrays));
  res.render('index', { title: 'SORTING!', sort: arr, numArrays: arr.length, sortType: req.body.Sort, sortSpeed: req.body.Speed});
});

module.exports = router;
