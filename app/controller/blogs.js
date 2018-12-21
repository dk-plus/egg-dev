'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('blogs.tpl', {
      title: 'blogs',
      list: [{
        title: '文章1',
        id: '001',
        author: 'dk',
        shorts: '这是文章1',
        date: '20013242545',
      }, {
        title: '文章2',
        id: '002',
        author: 'dk',
        shorts: '这是文章2',
        date: '20013242545',
      }, {
        title: '文章3',
        id: '003',
        author: 'dk',
        shorts: '这是文章3',
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
