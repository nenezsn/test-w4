const Controller = require('egg').Controller;
const fs = require('mz/fs');
const path = require('path')

class upload extends Controller {
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
   console.log('文件信息',file);
    fs.readFile(file.filepath, (err, data) => {
        fs.writeFile(path.resolve(__dirname,'../upload') +'/'+ file.filename, data, err => {
            console.log('err',err)
            if(!err){
              console.log('上传成功')
              fs.unlink(file.filepath,(err,data)=>{
                if(!err){
                  console.log('删除成功')
                }
              });
            }
        })
    })
    ctx.body = {
        code:200
    };
  }
};
module.exports = upload