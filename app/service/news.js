// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async getList() {
   return [1,2,3]
  }
}

module.exports = NewsService;