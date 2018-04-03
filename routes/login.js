/**
 * Module for the login routes.
 *
 * @module routes/login.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()
const User = require('../models/User')

router.route('/')
    .get((req, res) => res.render('login'))
    .post(async (req, res) => {
      const user = await User.findOne({ username: req.body.username })

      if (user) {
        const match = await user.compare(req.body.password)

        if (match) {
          req.session.login = true
          req.session.username = user.username
          res.redirect('/chat')
        } else {
          req.session.flash = {
            type: 'danger',
            message: 'The username or password is incorrect.'
          }

          res.redirect('back')
        }
      } else {
        req.session.flash = {
          type: 'danger',
          message: 'The username or password is incorrect.'
        }

        res.redirect('back')
      }
    })

// Exports
module.exports = router
