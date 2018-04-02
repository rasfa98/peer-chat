const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  googleId: String,
  facebookId: String,
  password: String
})

module.exports = mongoose.model('Uuser', userSchema)
