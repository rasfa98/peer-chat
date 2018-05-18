'use strict'

const mongoose = require('mongoose')
const bluebird = require('bluebird')
const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'))

const userSchema = mongoose.Schema({
  fullName: { type: String, required: 'Full name is required!', trim: true },
  email: { type: String, required: 'Email is required!', unique: true },
  password: { type: String, required: 'Password is required!', trim: true },
  status: { type: String, default: 'offline' },
  avatar: { type: String },
  friends: [{ id: String }],
  audio: { type: String, default: false },
  friendRequests: [{
    id: String,
    fullName: String,
    email: String,
    avatar: String
  }],
  socketId: { type: String, default: null },
  conversations: [{
    id: String,
    messages: [{
      message: String,
      sender: String
    }]
  }]
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
