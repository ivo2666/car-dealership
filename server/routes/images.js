const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.images.get);


router.post('/:id', auth(), controllers.images.post);


module.exports = router;