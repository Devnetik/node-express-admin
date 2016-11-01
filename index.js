var express = require('express');

module.exports = function(options){

  const router = new express.Router();

  router.get('/', function(req, res, next){
    console.log('admin req');
    res.json({});
  });

  return router;
}
