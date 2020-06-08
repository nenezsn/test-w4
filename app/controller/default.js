const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 针对前端路由 默认返回index.html
  async index() {
    await this.ctx.render('demo.html')
  }
}

module.exports = HomeController;
