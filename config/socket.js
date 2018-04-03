/**
 * Socket.io configuration.
 *
 * @module config/socket.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const socket = require('socket.io')

 /**
  * Configures and starts the websocket server.
  *
  * @param {object} server A HTTP server object.
  * @returns IO object.
  */
 module.exports.run = (server) => {
   const io = socket(server)

   io.on('connection', socket => {
     console.log('client connected!')
   })

   return io
 }
