/**
 * Checks if a user is authorized.
 *
 * @module lib/authorize.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 /**
  * Checks if the user is logged in.
  *
  * @param {object} req Req object.
  * @param {object} res Res object.
  * @param {*} next Used to continue in the chain.
  */
 module.exports = (req, res, next) => {
   if (!req.session.login) {
     res.redirect('/login')
   }

   next()
 }
