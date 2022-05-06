const ChatService = require('../services/chat');
const chat = new ChatService();

export const addMessage = async (req, res, next) =>{
    try {
        console.log('Im chat controller.addMessage()');
        const newMessage = await chat.createMessage(req.body);
        res.json({
            status: 'OK',
            data: newMessage
        })
    } catch (error) {
        console.log('Im in the catch chatController'); 
        res.json(error);
    }
}

export const findAllMessage = async (req, res, next) =>{
    try {
        const allMessages = await chat.getAllMessage();
        res.json(allMessages);
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}

export const getOneMessage = async(req, res, next) =>{
    try {
        const {params: {id}} = req;
        const messageRetrieved = await chat.getMessage(id);
        res.json(messageRetrieved);
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}

export const updateMessage = async(req, res, next) =>{
    try {
        const {
            body,
            params: {id}
        } = req;
        const updatedMessage = await chat.updateMessage(id, body);
        res.json(updatedMessage);
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}

export const deleteMessage = async(req, res, next) =>{
    try {
        const {params: {id}} = req;
        await chat.deleteMessage(id);
        res.json({
            status: 'OK',
            msg: 'Message deleted'
        });
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}