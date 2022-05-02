const mongoose = require('mongoose');
const { MONGO_URI } = require('../../config/globals');

exports.getConnection = async (): Promise<{}> =>{
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return {
            status: 'OK',
            msg: 'Connection success'
        };
    } catch (error) {
        return {
            status: 'ERROR',
            msg: error
        }
    }
}

