const Service  = require('egg').Service

class Public extends Service{
    async getAppUrl(){
    return this.config.news
    }
}
module.exports = Public