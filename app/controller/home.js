const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.cookies.set('name','wangbing',{
      signed:true,
      // encrypt:true
    })
    await ctx.render("index.html",{count:5});
  }
  async setSession() {
    const ctx = this.ctx;
    // 获取 Session 上的内容
    const userId = ctx.session.userId;
    // 修改 Session 的值
    ctx.session.username = ctx.query.name
    console.log('ctx.session.username',ctx.session.username)
    ctx.body = {
      success: ctx.session.username
    };
  }
}

module.exports = HomeController;




/**
 * ctx.set('set-cookie', 'haha=w;');设置响应头
 * ctx.cookies.set/get ('count',count + 1,options) ;获取设置cookie
 * ctx.render 渲染ejs模版
 * ctx.status 设置code码
 */
    
