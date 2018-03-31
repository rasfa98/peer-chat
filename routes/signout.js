/**
 * Module for the sign out routes.
 *
 * @module routes/signout.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()

router.route('/')
    .get((req, res) => {
      req.session.destroy()
      res.redirect('/')
    })

// Exports
module.exports = router
