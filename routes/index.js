var express = require('express');
var router = express.Router();
//var data = require('/public/data/mendoPeopleList.json')

/* GET home page. */
router.get('/', function(req, res, next) {

  //console.log(data)
  res.render('index', { title: 'Express' , data : [ {surname:"Tom"}] });
});

module.exports = router;
