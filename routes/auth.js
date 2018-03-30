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

router.post('/google', (req, res) => {
  res.redirect('/google')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect', (req, res) => {
  console.log('hej')
})

// Exports
module.exports = router
