'use strict'

const User = require('../models/User')

const router = require('express').Router()

router.route('/')
    .get(async (req, res) => {
      await User.findOneAndUpdate({ socketId: req.session.userId }, { status: 'offline', socketId: null })

      req.session.destroy()
      res.redirect('/')
    })

module.exports = router
