const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        host: 'http://localhost:9999',
        port: process.env.PORT || 9999,
        dbURL: 'mongodb://localhost:27017/softuni',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];