/**
 * Module for the index login.
 *
 * @module routes/login.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()

router.route('/')
    .get((req, res) => {
      res.render('login')
    })

// Exports
module.exports = router
