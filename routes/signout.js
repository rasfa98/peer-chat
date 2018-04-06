/**
 * Module for the sign out routes.
 *
 * @module routes/signout.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()
const User = require('../models/User')

router.route('/')
    .get(async (req, res) => {
      await User.findOneAndUpdate({ _id: res.locals.userId }, { status: 'offline', peerId: null })

      req.session.destroy()

      res.redirect('/')
    })

// Exports
module.exports = router
