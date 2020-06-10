const Controller = require('egg').Controller
class Auth extends Controller{
    async index(){
        const ctx = this.ctx
        if(ctx.query.id == 1){
            ctx.status = 403;
            ctx.message = '111111';
        }else{
            ctx.body='认证成功'
        }
    }
}
module.exports = Auth