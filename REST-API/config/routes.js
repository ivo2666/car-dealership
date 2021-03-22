import serverRenderer from './middleware/renderer';

const router = require('../routes');
const express = require('express')

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/cars', router.cars);

    app.use('/api/brands', router.brand);

    app.use('/api/models', router.model);

    app.use('/api/uploadImage', router.images);

    app.use('/uploadImages', express.static('uploadImages'))

    app.use('^/$', serverRenderer)

    app.use(express.static('public'))

    app.use('*', serverRenderer)

};