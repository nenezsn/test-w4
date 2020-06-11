const Controller = require('egg').Controller
class School extends Controller{
    async index (){
        const {data} = await this.ctx.curl ('https://tapi.seentao.com/school/schools.portal.get',{
            method:'POST',
            headers:'application/x-www-form-urlencoded',
            data:{
                start:0,
                limit:10
            }
        })
        this.ctx.body = JSON.parse(data.toString())
    }
}

module.exports = School