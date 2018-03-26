const mongoose = require('mongoose')

const animal = mongoose.Schema({
  name: { type: String },
  age: { type: Number }
})

// Exports
module.exports = mongoose.model('Test', animal)
