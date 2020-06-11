const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx
    console.log('ctx',ctx.app.count)
    await ctx.render("index.html", { count:ctx.app.count  });

  }
  async setSession() {
    const ctx = this.ctx;
    const query =
    // 获取 Session 上的内容
    ctx.session.userId = 1
    // 修改 Session 的值
    ctx.session.username = '王起'
    ctx.body = '设置成功'
  }

  async getSession(){
    const ctx = this.ctx
    ctx.body = {
        id:ctx.session.userId,
        name:ctx.session.username
      }
  }

  async setCookie() {
    const ctx = this.ctx;
    ctx.cookies.set('name', 'wangbing1', {
      signed: true,
      httpOnly:false,
      maxAge:24*3600
      // encrypt:true
    })
    ctx.body = '设置成功'
  }

  async clearCookie() {
    const ctx = this.ctx
    ctx.cookies.set('name', null)
    ctx.body = '清除成功'
  }

  async redir(){
    this.ctx.redirect('https://cloud.seentao.com')
  }
}

module.exports = HomeController;




/**
 * ctx.set('set-cookie', 'haha=w;');设置响应头
 * ctx.cookies.set/get ('count',count + 1,options) ;获取设置cookie
 * ctx.render 渲染ejs模版
 * ctx.status 设置code码
 */

