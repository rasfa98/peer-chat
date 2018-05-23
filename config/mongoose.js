/**
 * Mongoose configuration.
 *
 * @module config/mongoose.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const mongoose = require('mongoose')

 module.exports.run = async (app) => {
   let connectionString

   if (app.get('env') === 'development') { connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds247479.mlab.com:47479/peer-chat` }
   if (app.get('env') === 'production') { connectionString = 'mongodb://localhost/PeerChat' }

   app.set('connectionString', connectionString)

   mongoose.Promise = global.Promise

   mongoose.connection.on('connected', () => console.log('Mongoose connection is open.'))
   mongoose.connection.on('error', (err) => console.log(`Mongoose connection error has occured: ${err}.`))
   mongoose.connection.on('disconnected', () => console.log('Mongoose connection is closed.'))

   process.on('SIGINT', () => {
     mongoose.connection.close(() => {
       console.log('Mongoose connection is closed due to application termination.')
       process.exit(0)
     })
   })

   return mongoose.connect(connectionString)
 }
