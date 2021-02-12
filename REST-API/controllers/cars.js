const models = require('../models');
const fs = require('fs')
const cleanUploadImages = require('../utils/cleanUploadImages')

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
        const { brand, model, modification, engine, power, eurostandart, gearbox, category, price, km, birdayMonth, birdayYear, color, description } = req.body;
        //const { _id } = req.user;

        models.Cars.create({ brand, model, modification, engine, power, eurostandart, gearbox, category, price, km, birdayMonth, birdayYear, color, description })
            .then((createdcars) => {
                res.send(createdcars);
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
        cleanUploadImages(models, id, fs, next);
        models.Cars.deleteOne({ _id: id })
            .then((removedcars) => {
                return res.send(removedcars)
            })
            .catch(next)
    }
};