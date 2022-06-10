const express = require('express');
const Animals = require('../models/Animals');

const router = express.Router();

router.post("/", async function (req, res, next) {
    try {
        const animal = new Animals(req.body)
        await animal.save()
        res.send('Se agrego correctamente')
        console.log('agregado correctamente');
    } catch (error) {
        res.send(error.message);
        console.log(error);
    }
})

router.get("/", async function (req, res, next) {
    try {
        const animals = await Animals.find({});
        res.json({ message: 'animals en bd', animals })
    } catch (error) {
        res.send(error.message);
    }
})

router.put("/:id", async function (req, res, next) {
    try {
        const { id } = req.params //give the id of the animal to modify
        const animalChanges = req.body //give chabges makes in the animal

        const newAnimal = await Animals.findOneAndUpdate(id,
            animalChanges, {
            new: true
        })
        res.json({ message: 'animal', newAnimal })
    } catch (error) {
        res.send(error.message);
    }
})

router.delete("/:id", async function (req, res, next) {
    const { id } = req.params

    try {
        await Animals.findByIdAndDelete(id);
        res.json({ message: 'animal borrado correctamente' })
    } catch (error) {
        res.send(error.message);
    }
})


module.exports = router;