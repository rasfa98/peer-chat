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

// Get the current user.
router.route('/current')
    .get(async (req, res) => {
      const user = await User.findOne({ _id: res.locals.userId })

      res.send({ id: res.locals.userId, fullName: user.fullName, status: user.status, avatar: user.avatar })
    })

// Find and return users from the database from a specific query.
router.route('/query')
    .post(async (req, res) => {
      let users

      if (req.body.query.indexOf('@') !== -1) {
        users = await User.find({ email: { $regex: req.body.query, $options: 'i' } })
      } else {
        users = await User.find({ fullName: { $regex: req.body.query, $options: 'i' } })
      }

      users = users.map(x => { return { id: x._id, fullName: x.fullName, email: x.email, status: x.status, avatar: x.avatar } })

      users.forEach((x, i) => {
        if (x.id.equals(req.session.userId)) { users.splice(i, 1) }
      })

      res.send({ users: users })
    })

// Get the current users friend requests.
router.route('/friendRequests')
    .get(async (req, res) => {
      const user = await User.findOne({ _id: req.session.userId })

      res.send({ requests: user.friendRequests })
    })

// Get the current users friends.
router.route('/friends')
    .get(async (req, res) => {
      const user = await User.findOne({ _id: req.session.userId })

      const friends = []

      for (let i = 0; i < user.friends.length; i++) {
        const currentFriend = await User.findOne({ _id: user.friends[i].id })

        friends.push({ id: currentFriend._id, fullName: currentFriend.fullName, email: currentFriend.email, status: currentFriend.status, avatar: currentFriend.avatar })
      }

      res.send({ friends: friends })
    })

router.route('/conversations')
    .get(async (req, res) => {
      const user = await User.findOne({ _id: req.session.userId })

      const conversations = user.conversations

      const structuredConversations = {}

      for (let i = 0; i < conversations.length; i++) {
        structuredConversations[conversations[i].id] = conversations[i].messages
      }

      res.send({ conversations: structuredConversations })
    })

// Exports
module.exports = router
