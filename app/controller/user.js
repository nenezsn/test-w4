const Controller = require('egg').Controller
class User extends Controller{
    async userInfo (){
        const userlist = await this.ctx.service.user.getUserList()
        const { name  } = this.ctx.request.body
        const result = userlist.find(item=>item.name == name)
        if(result){
            this.ctx.body = {
                code:200,
                ...result
            }   
        }else{
            this.ctx.body = {
                code:404,
                msg:'未找到此人'
            }
        }
    }
}
module.exports = User