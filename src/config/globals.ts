require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    MONGODB_URL: process.env.MONGODB_URL,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    SECRET_SESSION: process.env.SECRET_SESSION,
    JWT_TOKEN: process.env.JWT_TOKEN,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET, 
}