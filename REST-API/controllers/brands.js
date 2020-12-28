const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Brand.find()
            .then((brands) => res.send(brands[0])
)
            .catch(next);
    }
}