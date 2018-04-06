/**
 * Module for the user routes.
 *
 * @module routes/user.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()
const User = require('../models/User')

router.route('/current')
    .get((req, res) => {
      res.send({ id: res.locals.userId })
    })

router.route('/savePeerId')
    .post(async (req, res) => {
      await User.findOneAndUpdate({ _id: req.body.userId }, { peerId: req.body.peerId })

      res.send({ status: 200 })
    })

// Exports
module.exports = router
