const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  googleId: String,
  password: { type: String, default: undefined }
})

module.exports = mongoose.model('Uuser', userSchema)
