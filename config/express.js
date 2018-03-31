/**
 * Express configuration.
 *
 * @module config/express.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const express = require('express')
 const passport = require('./passport')
 const path = require('path')
 const cors = require('cors')
 const bodyParser = require('body-parser')
 const dotenv = require('dotenv')
 const handlebars = require('express-handlebars')

/**
  * Configures and starts the express application.
  *
  * @returns {object}
  */
 module.exports.run = () => {
   const app = express()
   const port = 8000

   dotenv.config()
   passport.run()

   app.use(cors())

   app.engine('.hbs', handlebars({
     defaultLayout: 'main',
     extname: '.hbs'
   }))

   app.set('view engine', '.hbs')

   app.use(bodyParser.json())

   app.use(express.static(path.join(__dirname, '../public')))

   app.listen(port, console.log(`Server running on PORT: ${port}...`))

   return app
 }
