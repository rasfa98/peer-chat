/**
 * Express configuration.
 *
 * @module config/express.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const express = require('express')
 const path = require('path')
 const cors = require('cors')
 const bodyParser = require('body-parser')
 const dotenv = require('dotenv')

/**
  * Configures and starts the express application.
  *
  * @returns {object}
  */
 module.exports.run = () => {
   const app = express()
   const port = 8000

   dotenv.config()

   app.use(cors())

   app.use(bodyParser.json())

   app.use(express.static(path.join(__dirname, '../public')))

   app.listen(port, console.log(`Server running on PORT: ${port}...`))

   return app
 }
