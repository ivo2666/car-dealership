import models from '../../models'

export default (req, res, next) => {
    models.Cars.find().populate('user')
            .then((cars) => {
                req.cars = cars
                next()
            }
)
            .catch(next);
}