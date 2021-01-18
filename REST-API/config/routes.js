const router = require('../routes');
const express = require('express')

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/cars', router.cars);

    app.use('/api/brands', router.brand);

    app.use('/api/models', router.model);

    app.use('/api/uploadImage', router.images);

    app.use('/static', express.static('public'))

    app.use('*', (req, res, next) => res.send('<h1> Something weeent wrong. Try again. :thumbsup: </h1>'))
};