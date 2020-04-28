const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getInfo() {
   const { ctx } = this
   ctx.body =  ctx.request.body
  }
}

module.exports = HomeController;