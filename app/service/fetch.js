'use strict';

const Service = require('egg').Service;

class FetchService extends Service {
  async info() {
    const data = await this.ctx.curl('http://127.0.0.1:7001/info');
    // console.log(Buffer.from(data.data).toString());
    const info = JSON.parse(Buffer.from(data.data).toString())
    return info;
  }
}

module.exports = FetchService;