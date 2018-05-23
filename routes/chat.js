/**
 * Chat routes
 *
 * @module routes/chat.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const router = require('express').Router()
 const path = require('path')
 const misc = require('../lib/misc')

 router.route('/')
     .get(misc.authorize, (req, res) => res.sendFile(path.join(__dirname, '../public', 'chat.html')))

 module.exports = router
