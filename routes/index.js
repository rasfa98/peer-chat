/**
 * Index routes
 *
 * @module routes/index.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const router = require('express').Router()

 router.route('/')
     .get((req, res) => res.render('index'))

 module.exports = router
