'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { name, author } = this.config.blog;
    const { ctx } = this;

    await ctx.render('home.tpl', {
      title: 'home',
      name,
      author,
      urls: [
        '/',
        '/blogs',
        '/about',
      ],
    });

  }
}

module.exports = HomeController;
