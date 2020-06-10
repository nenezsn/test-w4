module.exports = app => {
  const { router, controller, middleware } = app;

  // 全局路由在config.default配置或者按路由加载
  router.get('/home', middleware.log({ name: 'wangbing' }), controller.home.index);

  router.get('/setS', controller.home.setSession);
  router.get('/setC', controller.home.setCookie);
  router.get('/clearC',controller.home.clearCookie)
  router.get('/news/:id', controller.news.index)

  // 上传和下载
  router.post('upload', '/upload', controller.upload.upload)
  router.get('/download', controller.upload.download)

  // 认证
  router.get('/auth', controller.auth.index)

  // 处理接口demo
  router.post('/get.user.info', controller.user.userInfo)

  // 需要将public上的index.html放在view文件夹下，并render 模拟express app.use('*',res=>res.snedFile('index.html'))
  router.get('*', controller.default.index)
};