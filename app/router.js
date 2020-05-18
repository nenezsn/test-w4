module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/fetch', controller.home.fetchPosts);
  router.post('haha', '/api/post', controller.mockApi.getInfo)
  router.post('upload', '/upload', controller.upload.upload)
  router.get('*',controller.notfound.index)
};