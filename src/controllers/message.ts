const MessageService = require('../services/message');
const message = new MessageService();

export const addMessage = async (req, res, next) =>{
    try {
        const newMessage = await message.createMessage(req.body);
        res.json({
            status: 'OK',
            data: newMessage
        })
    } catch (error) {
        res.json(error);
    }
}

export const findAll = async (req, res, next) =>{
    try {
        const allMessages = await message.findAll();
        res.json(allMessages);
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}

export const getOne = async(req, res, next) =>{
    try {
        const {params: {id}} = req;
        const messageRetrieved = await message.getOne(id);
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
        const updatedMessage = await message.updateMessage(id, body);
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
        await message.deleteMessage(id);
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