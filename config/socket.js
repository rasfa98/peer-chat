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

 /**
  * Configures and starts the websocket server.
  *
  * @param {object} server A HTTP server object.
  * @returns IO object.
  */
 module.exports.run = (server) => {
   const io = socket(server)
   let onlineUsers = []

   io.on('connection', async socket => {
     onlineUsers = await User.find({ status: 'online' })

     onlineUsers = onlineUsers.map(x => { return { id: x._id, fullName: x.fullName, email: x.email } })

     io.emit('updateOnlineUsers', onlineUsers)

     socket.on('newUser', async user => {
       await User.findOneAndUpdate({ _id: user.id }, { socketId: socket.id, status: 'online' })

       onlineUsers = await User.find({ status: 'online' })

       onlineUsers = onlineUsers.map(x => { return { id: x._id, fullName: x.fullName, email: x.email } })

       io.emit('updateOnlineUsers', onlineUsers)
     })

     socket.on('sendSignal', async data => {
       const user = await User.findOne({ _id: data.id })

       socket.to(user.socketId).emit('recieveSignal', data.peerId)
     })

     socket.on('disconnect', async () => {
       await User.findOneAndUpdate({ socketId: socket.id }, { status: 'offline' })

       onlineUsers = await User.find({ status: 'online' })

       onlineUsers = onlineUsers.map(x => { return { id: x._id, fullName: x.fullName, email: x.email } })

       io.emit('updateOnlineUsers', onlineUsers)
     })
   })

   return io
 }
