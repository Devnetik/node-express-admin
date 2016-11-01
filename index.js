var express = require('express'),
  path = require('path');

module.exports = function(app, options) {
  // TODO: merge options with defaults

  // register views directory
  let views = app.get('views');
  if (!Array.isArray(views)) {
    views = [views];
  }
  views.push(path.join(__dirname, 'views'));
  app.set('views', views);

  // create routes
  const router = new express.Router();
  router.get('/', function(req, res, next) {
    res.render('admin_index', {options: options});
  });

  // register router
  app.use(options.path || '/admin', router);
}
