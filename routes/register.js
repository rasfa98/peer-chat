/**
 * Module for the register routes.
 *
 * @module routes/register.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()
const User = require('../models/User')
const checkError = require('../lib/checkError')

router.route('/')
    .get((req, res) => res.render('register'))
    .post(async (req, res) => {
      try {
        const user = new User({
          fullName: req.body.fullName,
          username: req.body.username,
          password: req.body.password
        })

        if (req.body.password !== req.body.passwordRepeat) {
          req.session.flash = {
            type: 'danger',
            message: 'The passwords do not match!'
          }

          res.redirect('back')
        } else {
          await user.save()

          res.redirect('/login')
        }
      } catch (err) {
        checkError(err, req, res)
      }
    })

// Exports
module.exports = router
