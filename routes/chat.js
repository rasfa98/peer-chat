'use strict'

const router = require('express').Router()
const path = require('path')
const authorize = require('../lib/authorize')

router.route('/')
    .get(authorize, (req, res) => res.sendFile(path.join(__dirname, '../public', 'chat.html')))

module.exports = router
