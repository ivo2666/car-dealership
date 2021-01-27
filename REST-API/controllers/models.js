const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const {brand} = req.params
        models.Model.findOne({'brand': brand})
            .then((models) => res.send(models)
)
            .catch(next);
    }
}