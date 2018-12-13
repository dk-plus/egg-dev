'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx, app, config, service, logger } = this;
    const data = {
      list: await ctx.service.blog.list(),
      info: await ctx.service.fetch.info(),
    };
    console.log(ctx.helper.formatTime(new Date()));
    // console.log(JSON.stringify(ctx.request, {}, 2))
    await ctx.render('blog.tpl', data);
  }
}

module.exports = BlogController;