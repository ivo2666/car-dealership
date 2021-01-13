const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;


const carsSchema = new Schema({

    brand: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    modification: {
        type: String,
        required: true,
    },

    engine: {
        type: String,
        required: true,
    },

    power: {
        type: Number,
        required: true,
    },

    eurostandart: {
        type: String,
        required: true,
    },

    gearbox: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    km: {
        type: Number,
        required: true,
    },

    birdayMont: {
        type: String,
        required: true,
    },

    birdayYear: {
        type: Number,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },

    user: {
        type: ObjectId,
        ref: "User"
    },

    extras: {
        type: [String],
        //required: true
    },
    images: {
        type: [String],
        //required: true
    }

});

module.exports = new Model('cars', carsSchema);