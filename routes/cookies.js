/**
 * Module for the cookies routes.
 *
 * @module routes/cookies.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()

router.route('/accept')
    .get((req, res) => {
      res.locals.cookies = true

      res.redirect('/')
    })

router.route('/decline')
    .get((req, res) => {
      res.locals.cookies = false

      res.redirect('/')
    })

// Exports
module.exports = router
