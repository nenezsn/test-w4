module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.index);
  router.get('/fetch', controller.home.fetchPosts);
  router.post('upload', '/upload', controller.upload.upload)

  // 处理接口demo
  router.post('/get.user.info', controller.user.userInfo)
  
  // 需要将public上的index.html放在view文件夹下，并render 模拟express app.use('*',res=>res.snedFile('index.html'))
  router.get('*',controller.default.index)
};