import serverRenderer from './middleware/renderer';
import getCars from './middleware/getCars'
import mobile from '../utils/mobileBG'

const auth = require('../utils/auth')
const router = require('../routes');
const express = require('express')

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/cars', router.cars);

    app.use('/api/brands', router.brand);

    app.use('/api/models', router.model);

    app.use('/api/uploadImage', router.images);

    app.use('/uploadImages', express.static('uploadImages'))

    app.use('^/$', auth(), getCars, serverRenderer)

    app.use(express.static('build'))

    app.use('/getFromMobile.bg', mobile)

    app.use('*', auth(), getCars, serverRenderer)

};