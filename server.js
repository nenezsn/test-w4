const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')

const app = express()
app.set('port', 3000)
app.set('trust proxy', true)
app.use(compression())

//主要用来解析前端传过来的数据(分装在req.body)
app.use(bodyParser.json()) //解析 Content-type : appliaction/json 就是json对象
app.use(bodyParser.urlencoded({ extended: true })) //解析 Content-type : application/x-www-form-urlencoded 是一个通过&拼接起来的字符串
app.use(cookieParser())

app.use(express.static('./dist'))

app.get('*', (req, res, next) => {
    res.status(200).sendFile(path.resolve(__dirname + '/dist/index.html'))
})

app.listen(app.get('port'), function () {
    console.log('可访问端口:' + 'http://localhost:' + app.get('port'))
})