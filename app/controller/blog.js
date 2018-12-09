'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx } = this;
    const data = {
      list: await ctx.service.blog.list(),
    }
    await ctx.render('blog.tpl', data);
  }
}

module.exports = BlogController;