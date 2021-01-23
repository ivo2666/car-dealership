const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Cars.find().populate('user')
            .then((cars) => res.send(cars)
)
            .catch(next);
    },

    getOne: (req, res, next) => {
        const { id } = req.params
        models.Cars.findById({_id: id}).populate('user')
            .then((car) =>  res.send(car)
)
            .catch(next);
    },

    post: (req, res, next) => {
        const { brand, model, modification, engine, power, eurostandart, gearbox, category, price, km, birdayMont, birdayYear, color, description } = req.body;
        const { _id } = req.user;

        models.Cars.create({ brand, model, modification, engine, power, eurostandart, gearbox, category, price, km, birdayMont, birdayYear, color, description })
            .then((createdcars) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { cars: createdcars } }),
                    models.Cars.findOne({ _id: createdcars._id })
                ]);
            })
            .then(([modifiedObj, carsObj]) => {
                res.send(carsObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const update = req.body;
        models.Cars.updateOne({ _id: id },  update )
            .then((updatedcars) => res.send({id}))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Cars.deleteOne({ _id: id })
            .then((removedcars) => res.send(removedcars))
            .catch(next)
    }
};