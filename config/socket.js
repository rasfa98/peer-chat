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

   io.on('connection', socket => {
     User.find({ status: 'online' })
     .then(onlineUsers => {
       const data = onlineUsers.map(x => { return { id: x._id, fullName: x.fullName, email: x.email } })

       io.emit('updateOnlineUsers', data)
     })

     socket.on('newUser', async user => {
       await User.findOneAndUpdate({ _id: user.id }, { socketId: socket.id })
     })

     socket.on('pingUser', async id => {
       const user = await User.findOne({ _id: id })

       socket.to(user.socketId).emit('getPing', 'Hello!')
     })
   })

   return io
 }
