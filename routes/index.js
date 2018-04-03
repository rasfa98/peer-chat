/**
 * Module for the index routes.
 *
 * @module routes/index.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()

router.route('/')
    .get((req, res) => {
      res.render('index')
      require('../models/User').find({}).then(x => console.log(x))
    })

// Exports
module.exports = router
