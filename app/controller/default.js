const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 针对前端路由 默认返回index.html
  async index() {
    // extend context 
    console.log('终端类型：',this.ctx.isIOS)
    console.log('appconfig,',this.app.config.keys)
    await this.ctx.render('demo.html')
  }
}

module.exports = HomeController;
