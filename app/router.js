'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.login.index);
  router.post('/login', controller.login.user);
  router.get('/blogs', controller.blogs.index);
  router.get('/blogs/:id', controller.blogs.article);
  router.get('/about', controller.about.index);
};
