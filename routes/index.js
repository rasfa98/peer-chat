'use strict'

const router = require('express').Router()

router.route('/')
    .get((req, res) => res.redirect('/login'))

module.exports = router
