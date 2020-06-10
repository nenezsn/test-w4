const Service  = require('egg').Service

class Public extends Service{
    async getAppUrl(){
    return this.app.config.news
    }
}
module.exports = Public