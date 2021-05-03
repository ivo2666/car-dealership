const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

//outer.get('/', controllers.images.get);


router.post('/:id', auth(), controllers.images.post);

router.put('/del/:id', auth(), controllers.images.del);


module.exports = router;