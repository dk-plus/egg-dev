'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const gzip = app.middleware.gzip({ threshold: 900 });
  router.get('/', controller.home.index);
  router.get('/blog/:id', controller.blog.index);
  router.get('/testgzip', gzip, controller.blog.index);
  router.get('/info', controller.info.data);
  router.get('/search', controller.search.index);
  router.post('/form', controller.form.post);
  router.get('/login', controller.login.login);
  router.post('/user', controller.login.user);
};
