const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  googleId: String
})

module.exports = mongoose.model('Uuser', userSchema)
