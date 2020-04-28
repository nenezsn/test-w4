const Controller = require('egg').Controller;
const fs = require('mz/fs');
const path = require('path')

class upload extends Controller {
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const name = 'egg-multipart-test/' + path.basename(file.filename);
    fs.readFile(file.filepath, (err, data) => {
        console.log('data',data)
        fs.writeFile('../upload/' + file.filename, data, err => {
            console.log('err',err)
        })
    })
    ctx.body = {
        code:200
    };
  }
};
module.exports = upload