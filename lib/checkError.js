/**
 * Module for checking the different errors.
 *
 * @module lib/checkError.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 /**
  * Check each error.
  *
  * @param {object} err Error.
  * @param {object} req Req object.
  * @param {object} res Res object.
  */
 module.exports = (err, req, res) => {
   if (err.name === 'ValidationError') {
     req.session.flash = {
       type: 'danger',
       message: err.errors[Object.keys(err.errors)[0]].message
     }

     res.redirect('back')
   } else if (err.name === 'BulkWriteError') {
     req.session.flash = {
       type: 'danger',
       message: 'A user with this email already exists, you might have signed in with Facebook/Google?'
     }

     res.redirect('back')
   } else { console.log('ERROR:', err) }
 }
