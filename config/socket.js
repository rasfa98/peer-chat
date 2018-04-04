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
       const data = onlineUsers.map(x => { return { fullName: x.fullName, email: x.email } })

       io.emit('updateOnlineUsers', data)
     })
   })

   return io
 }
