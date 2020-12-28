const controllers = require('../controllers');
const router = require('express').Router();

router.get('/:brand', controllers.models.get);

module.exports = router;