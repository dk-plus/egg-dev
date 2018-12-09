'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  async list() {
    const { addr, title } = this.config.blog;
    const data = [ 1, 2, 3, 4 ];
    const blogList = data.map(item => ({
      title: `blog_${item}`,
      content: `this is blog_${item}, from ${addr}: ${title}`,
      time: new Date(),
      size: Math.random()*10000,
    }));
    return blogList;
  }
}

module.exports = BlogService;