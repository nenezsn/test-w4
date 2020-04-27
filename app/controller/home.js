const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.ctx.service.news.getList()
    await this.ctx.render("index.html",{count:data[0]});
  }
}

module.exports = HomeController;