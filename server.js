const express = require('express')
const path = require('path')
const helmet = require('helmet');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const request = require('request');

const app = express()
// app.use(helmet());// iframe 嵌套限制
app.set('port', 3000)
app.set('trust proxy', true)
app.use(compression())

//主要用来解析前端传过来的数据(分装在req.body)
app.use(bodyParser.json()) //解析 Content-type : appliaction/json 就是json对象
app.use(bodyParser.urlencoded({ extended: true })) //解析 Content-type : application/x-www-form-urlencoded 是一个通过&拼接起来的字符串
app.use(cookieParser())

app.use(express.static('./dist'))

function pbuServerRequest(url,form){
    return new Promise((resolve,reject)=>{
        request.post({
            url,
            form
        },(err, response, body)=>{
            if (err) {
                return reject(err);
            }
            const ret = JSON.parse(body);
            resolve(ret);
        })
    })
}

function pbu_http_proxy(config,logger){
    return function(req,res,next){
        if(req.method != 'POST'){
            return next()
        }
        const path = req.path.split('/').reverse();
        const url = `${config.businessApiUrl}/${path[1]}/${path[0]}`
        const body = req.body
        if(logger){console.log('request:::::',url,body)}
        pbuServerRequest(url,body).then(data=>{
        if(logger){console.log('responce:::::',data)}
            res.json(data)
        }).catch(err=>{
        if(logger){console.log('error:::::',err)}
            res.json(err)
        })
    }
}

app.use(pbu_http_proxy({businessApiUrl:'https://tapi.seentao.com'},true))

app.get('*', (req, res, next) => {
    res.status(200).sendFile(path.resolve(__dirname + '/dist/index.html'))
})

app.listen(app.get('port'), function () {
    console.log('可访问端口:' + 'http://localhost:' + app.get('port'))
})