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
exports.static = {
    prefix: '/', 
    maxAge: 6000,
};