const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Brand.find()
            .then((brands) => {
                return res.send(brands[0].brands)
            } 
)
            .catch(next);
    }
}