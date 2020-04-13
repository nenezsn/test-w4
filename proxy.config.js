module.exports =  {
    "/api": {
        target: "http://yapi.demo.qunar.com/mock/97860/",
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        }
    }
}