const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.cars.get);

router.get('/details/:id', auth(), controllers.cars.getOne);

router.post('/sell-cars', auth(), controllers.cars.post);

router.put('/:id', auth(), controllers.cars.put);

router.delete('/:id', auth(), controllers.cars.delete);

module.exports = router;