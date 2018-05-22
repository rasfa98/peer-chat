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
  socketId: { type: String, default: null },
  friendRequests: [{
    id: String,
    fullName: String,
    email: String,
    avatar: String
  }],
  conversations: [{
    id: String,
    messages: [{
      message: String,
      sender: String
    }]
  }]
})

// Validate full name.
userSchema.path('fullName').validate(function (value) {
  return value.match(/^[a-zA-Z ]+$/)
}, 'Please provide a full name with characters only.')

userSchema.path('fullName').validate(function (value) {
  return value.trim().length <= 20
}, 'Please provide a full name with a length of maximum 20 characters.')

// Validate email.
userSchema.path('email').validate(function (value) {
  return value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}, 'Please provide an email with a valid format.')

userSchema.path('email').validate(function (value) {
  return value.trim().length <= 50
}, 'Please provide an email with a length of maximum 50 characters.')

// Validate password.
userSchema.path('password').validate(function (value) {
  return value.trim().length >= 5 && value.trim().length <= 30
}, 'Please provide a password with a length of minimum 5 characters and maximum 30 characters.')

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
