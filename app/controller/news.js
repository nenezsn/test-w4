const Controller = require('egg').Controller
class News extends Controller{
    async index (){
        const ctx = this.ctx
        const id = ctx.params.id
        ctx.body = id
    }
}
module.exports = News