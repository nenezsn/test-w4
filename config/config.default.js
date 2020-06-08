//cookie加签和加密所用到的密钥
exports.keys = '111112ww3insgaj3kfksycks'
exports.session = {
    // 设置session cookie里面的key
    key: 'SESSION_ID',
    // 设置最大的过期时间
    maxAge: 30 * 1000 * 60,
    // 设置是否只服务端可以访问
    httpOnly: true,
    // 设置是否加密
    encrypt: true,
    // 设置为true每次刷新页面的时候session都会被延期
    renew: true
}


exports.view = {
    mapping: {
        '.html': 'ejs',
    }
};
exports.middleware = [
    'log'
];
exports.news = {
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}
// 静态资源地址
exports.static = {
    prefix: '/', 
    maxAge: 6000,
};
// 关闭csrf安全威胁
exports.security={
    csrf:{
        enable:false
    }
}

exports.multipart = {
    mode: 'file',
  }