module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('haha','/api/post',controller.mockApi.getInfo)
    router.post('upload','/upload',controller.upload.upload)
  };