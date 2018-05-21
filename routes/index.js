'use strict'

const router = require('express').Router()

router.route('/')
    .get((req, res) => res.render('index'))

module.exports = router
