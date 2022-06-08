const mongoose = require('mongoose');

const schemaAnimals = new mongoose.Schema({
    senasaId: {
        type: String,
        required: true,
        maxlength: 16,
        unique: true
    },
    animalType: {
        type: String,
        enum: ['novillo', 'toro', 'vaquillona'],
        required: true,

    },
    weight: {
        type: Number,
        required: true,
    },
    paddockName: {
        type: String,
        required: true,
        maxlength: 200
    },
    deviceType: {
        type: String,
        required: true,
        enum: ['collar', 'caravana'],
    },
    deviceNumber: {
        type: String,
        required: true,
        maxlength: 8,
        unique: true
    }
})

module.exports = mongoose.model('Animals', schemaAnimals)