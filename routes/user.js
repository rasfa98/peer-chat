/**
 * User routes
 *
 * @module routes/user.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const router = require('express').Router()
 const User = require('../models/User')

 router.route('/current')
     .get(async (req, res) => {
       try {
         const user = await User.findOne({ _id: res.locals.userId })

         res.send({ resStatus: 'success', id: res.locals.userId, fullName: user.fullName, status: user.status, avatar: user.avatar, audio: user.audio })
       } catch (err) { res.send({ resStatus: 'error' }) }
     })

 // Search and return the users with the matching query (full name or email)
 router.route('/query')
     .post(async (req, res) => {
       try {
         let users

         if (req.body.query.indexOf('@') !== -1) {
           users = await User.find({ email: { $regex: req.body.query, $options: 'i' } })
         } else { users = await User.find({ fullName: { $regex: req.body.query, $options: 'i' } }) }

         users = users.map(x => { return { id: x._id, fullName: x.fullName, email: x.email, status: x.status, avatar: x.avatar } })

         users.forEach((x, i) => { if (x.id.equals(req.session.userId)) { users.splice(i, 1) } })

         res.send({ resStatus: 'success', users: users })
       } catch (err) { res.send({ resStatus: 'error' }) }
     })

 router.route('/friendRequests')
     .get(async (req, res) => {
       try {
         const user = await User.findOne({ _id: req.session.userId })

         res.send({ resStatus: 'success', requests: user.friendRequests })
       } catch (err) { res.send({ resStatus: 'error' }) }
     })

 router.route('/friends')
     .get(async (req, res) => {
       try {
         const user = await User.findOne({ _id: req.session.userId })

         const friends = []

         for (let i = 0; i < user.friends.length; i++) {
           const currentFriend = await User.findOne({ _id: user.friends[i].id })

           friends.push({ id: currentFriend._id, fullName: currentFriend.fullName, email: currentFriend.email, status: currentFriend.status, avatar: currentFriend.avatar })
         }

         res.send({ resStatus: 'success', friends: friends })
       } catch (err) { res.send({ resStatus: 'error' }) }
     })

 router.route('/conversations')
     .get(async (req, res) => {
       try {
         const user = await User.findOne({ _id: req.session.userId })

         const conversations = user.conversations

         const structuredConversations = {}

         for (let i = 0; i < conversations.length; i++) {
           structuredConversations[conversations[i].id] = conversations[i].messages
         }

         res.send({ resStatus: 'success', conversations: structuredConversations })
       } catch (err) { res.send({ resStatus: 'error' }) }
     })

 module.exports = router
