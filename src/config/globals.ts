require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    MONGODB_URL: process.env.MONGODB_URL,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
}