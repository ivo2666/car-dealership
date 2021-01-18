const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.brands.get);

module.exports = router;