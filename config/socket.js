/**
 * Socket.io configuration.
 *
 * @module config/socket.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const socket = require('socket.io')
 const User = require('../models/User')

 async function updateOnlineUsers (io) {
   let users = await User.find({ status: 'online' })
   users = users.map(x => { return { id: x._id, fullName: x.fullName } })

   io.emit('updateOnlineUsers', users)
 }

 /**
  * Configures and starts the websocket server.
  *
  * @param {object} server A HTTP server object.
  * @returns IO object.
  */
 module.exports.run = (server) => {
   const io = socket(server)

   io.on('connection', async socket => {
     socket.on('newUser', async user => {
       await User.findOneAndUpdate({ _id: user.id }, { socketId: socket.id, status: 'online' })

       updateOnlineUsers(io)
     })

     socket.on('sendSignal', async data => {
       const user = await User.findOne({ _id: data.id })
       const sender = await User.findOne({ socketId: socket.id })

       socket.to(user.socketId).emit('recieveSignal', { peerId: data.peerId, id: sender.id, type: data.type, chatType: data.chatType })
     })

     socket.on('hangUp', async id => {
       const user = await User.findOne({ _id: id })

       socket.to(user.socketId).emit('hangUp')
     })

     socket.on('addUser', async id => {
       const user = await User.findOne({ _id: id })
       const sender = await User.findOne({ socketId: socket.id })

       const friendRequests = user.friendRequests

       const newRequest = {
         id: sender.id,
         fullName: sender.fullName,
         email: sender.email
       }

       friendRequests.push(newRequest)

       await User.findOneAndUpdate({ _id: id }, { friendRequests: friendRequests })

       socket.to(user.socketId).emit('addUser', newRequest)
     })

     socket.on('sendMessage', async data => {
       const sendTo = await User.findOne({ _id: data.id })
       const from = await User.findOne({ socketId: socket.id })

       socket.emit('newMessage', { message: data.message, id: sendTo.id, name: 'you' })
       socket.to(sendTo.socketId).emit('newMessage', { message: data.message, id: from._id, name: from.fullName })
     })

     socket.on('disconnect', async () => {
       await User.findOneAndUpdate({ socketId: socket.id }, { status: 'offline', socketId: null })

       updateOnlineUsers(io)
     })
   })

   return io
 }
