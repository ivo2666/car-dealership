const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        host: 'http://138.197.176.82',
        port: process.env.PORT || 9999,
        dbURL: 'mongodb://localhost:27017/lsAutoDB',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];