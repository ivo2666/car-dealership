const User = require('./User');
const Cars = require('./Cars');
const TokenBlacklist = require('./TokenBlacklist');
const  Brand   = require('./brandsAndModels').brand;
const  Model   = require('./brandsAndModels').model;

module.exports = {
    User,
    Cars,
    TokenBlacklist,
    Brand,
    Model
};