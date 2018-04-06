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
      // res.redirect('http://localhost:4200/chat')
      res.sendFile(path.join(__dirname, '../public', 'chat.html'))
    })

// Exports
module.exports = router
