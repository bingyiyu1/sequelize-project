'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/', controller.home.index);
  router.get('/admin/login', controller.admin.adminLogin);
  router.resources('users', '/users', controller.users);
  require('./router/cloth')(app);
};
