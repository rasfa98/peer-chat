/**
 * Module for the user routes.
 *
 * @module routes/user.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

const router = require('express').Router()

router.route('/current')
    .get((req, res) => res.send({ id: res.locals.userId }))

// Exports
module.exports = router
