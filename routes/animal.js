const router = require('express').Router()
const Animal = require('../models/Animal')

router.route('/')
    .get(async (req, res) => {
      res.send(await Animal.find({}))
    })
    .post(async (req, res) => {
      const animal = new Animal({
        name: req.body.name,
        age: req.body.age
      })

      await animal.save()

      res.send(animal)
    })

// Exports
module.exports = router
