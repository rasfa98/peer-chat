/**
 * Module for the User schema.
 *
 * @module models/User.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const mongoose = require('mongoose')
 const bluebird = require('bluebird')
 const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'))

 const userSchema = mongoose.Schema({
   fullName: { type: String, required: 'Full name is required!', trim: true },
   email: { type: String, required: 'Email is required!', unique: true },
   password: { type: String, required: 'Password is required!', trim: true },
   googleId: { type: String, default: null },
   facebookId: { type: String, default: null },
   status: { type: String, default: 'offline' },
   friends: { type: [Object], default: null },
   socketId: { type: String, default: null }
 })

 // Hashing of password.
 userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) { next() }

   const salt = await bcrypt.genSaltAsync(10)
   const hash = await bcrypt.hashAsync(this.password, salt, null)

   this.password = hash

   next()
 })

 // Compare guessed password to stored password.
 userSchema.methods.compare = function (password) {
   return bcrypt.compareAsync(password, this.password)
 }

 module.exports = mongoose.model('User', userSchema)
