/**
 * Module for the chat routes.
 *
 * @module routes/chat.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()
const path = require('path')
const authorize = require('../lib/authorize')

router.route('/')
    .get(authorize, (req, res) => {
      require('../models/User').find({}).then(x => console.log(x))

      res.sendFile(path.join(__dirname, '../client/src', 'chat.html'))
    })

// Exports
module.exports = router
