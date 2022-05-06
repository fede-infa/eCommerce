const chatModel = require('../dao/models/chat');

export = class {
    async createMessage(message){
        return chatModel.create(message);
    }

    async getMessage(id){
        return chatModel.findById(id);
    }

    async getAllMessage(){
        return chatModel.create();
    }

    async updateMessage(id, message){
        return chatModel.findByIdAndUpdate(id, message);
    }

    async deleteMessage(id){
        return chatModel.findByIdAndDelete(id);
    }
}