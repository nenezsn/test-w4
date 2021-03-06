exports.keys = 'cww3insgaj3kfksycks'
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