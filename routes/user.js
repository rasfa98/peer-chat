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
    .get((req, res) => res.send({ id: res.locals.userId }))

router.route('/query')
    .post(async (req, res) => {
      let users

      if (req.body.query.indexOf('@') !== -1) {
        users = await User.find({ email: { $regex: req.body.query, $options: 'i' } })
      } else {
        users = await User.find({ fullName: { $regex: req.body.query, $options: 'i' } })
      }

      users = users.map(x => { return { id: x._id, fullName: x.fullName, email: x.email, status: x.status } })

      res.send({ users: users })
    })

router.route('/friendRequests')
    .get(async (req, res) => {
      const user = await User.findOne({ _id: req.session.userId })

      res.send({ requests: user.friendRequests })
    })

router.route('/friends')
    .get(async (req, res) => {
      const user = await User.findOne({ _id: req.session.userId })

      res.send({ friends: user.friends })
    })

// Exports
module.exports = router
