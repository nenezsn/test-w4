// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async getUserList() {
   return [{name:'张三',age:16},{name:'李四',age:18},{name:'王五',age:20}]
  }
}

module.exports = NewsService;