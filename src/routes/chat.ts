const chatController = require('../controllers/chat');

export = (router) =>{
    router
    .get('/api/v1/chat', chatController.findAllMessage)
    .get('/api/v1/chat/:id', chatController.getOneMessage)
    .post('/api/v1/chat', chatController.addMessage)
    .patch('/api/v1/chat/:id', chatController.updateMessage)
    .delete('/api/v1/chat/:id', chatController.deleteMessage)
    return router;
}
