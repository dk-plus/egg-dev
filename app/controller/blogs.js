'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('blogs.tpl', {
      list: [{
        title: '文章1',
        author: 'dk',
        shorts: '这是文章1',
        date: '20013242545',
      }, {
        title: '文章2',
        author: 'dk',
        shorts: '这是文章1',
        date: '20013242545',
      }, {
        title: '文章3',
        author: 'dk',
        shorts: '这是文章1',
        date: '20013242545',
      },],
    });
  }
  
  async article() {
    const { ctx } = this;
    const { params: { id } } = ctx;
    await ctx.render('article.tpl', {
      id,
    });
  }
}

module.exports = BlogController;
