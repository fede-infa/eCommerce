const messageModel = require('../dao/models/message');

export = class {
    async createMessage(message){
        return messageModel.create(message);
    }

    async getMessage(id){
        return messageModel.findById(id);
    }

    async getAll(){
        return messageModel.create();
    }

    async updateMessage(id, message){
        return messageModel.findByIdAndUpdate(id, message);
    }

    async deleteMessage(id){
        return messageModel.findByIdAndDelete(id);
    }
}