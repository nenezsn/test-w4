// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async getList() {
    const { ctx } = this
    console.log('services:',ctx.query)
   return [1,2,3]
  }
}

module.exports = NewsService;