'use strict'

const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const handlebars = require('express-handlebars')
const socket = require('./socket')

module.exports.run = () => {
  const app = express()
  const port = 8000

  dotenv.config()

  app.use(cors())

  app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
  }))

  app.set('view engine', '.hbs')

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(express.static(path.join(__dirname, '../public')))

  const server = app.listen(port, console.log(`Server running on PORT: ${port}...`))

  app.set('io', socket.run(server))

  return app
}
