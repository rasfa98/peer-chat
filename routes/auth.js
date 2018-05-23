/**
 * Authentication routes
 *
 * @module routes/auth.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const router = require('express').Router()
 const passport = require('passport')

 router.route('/google')
     .get(passport.authenticate('google', { scope: ['profile', 'email'] }))

 router.route('/google/redirect')
     .get(passport.authenticate('google'), (req, res) => {
       req.session.login = true
       res.redirect('/chat')
     })

 router.route('/facebook')
     .get(passport.authenticate('facebook', { authType: 'rerequest', scope: ['public_profile', 'email'] }))

 router.route('/facebook/redirect')
     .get(passport.authenticate('facebook'), (req, res) => {
       req.session.login = true
       res.redirect('/chat')
     })

 module.exports = router
