const mongoose = require('./config/mongoose')
const express = require('./config/express')
const path = require('path')

const app = express.run()

mongoose.run().catch(err => {
  console.log(err)
  process.exit(1)
})

app.use('/animal', require('./routes/animal'))

app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'views', 'errors', '404.html')))

app.use((err, req, res, next) => {
  console.log(err)
  return res.status(500).sendFile(path.join(__dirname, 'views', 'errors', '500.html'))
})
