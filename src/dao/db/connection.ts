const mongoose = require('mongoose');
const { MONGO_URI, MONGODB_URL } = require('../../config/globals');

exports.getConnection = async (): Promise<{}> =>{
    try {
        await mongoose.connect(MONGODB_URL, {
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

