/**
 * Module for the auth routes.
 *
 * @module routes/auth.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()
const passport = require('passport')

router.route('/google')
    .get(passport.authenticate('google', { scope: ['profile'] }))

router.route('/google/redirect')
    .get(passport.authenticate('google'), (req, res) => {
      req.session.login = true
      res.redirect('/chat')
    })

// Exports
module.exports = router
