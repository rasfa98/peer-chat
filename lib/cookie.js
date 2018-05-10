/**
 * Module for checking if a user has allowed cookies.
 *
 * @module lib/cookie.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

module.exports = (req, res, next) => {
  if (res.locals.cookies) {
    next()
  } else {
    res.redirect('/login')
  }
}
