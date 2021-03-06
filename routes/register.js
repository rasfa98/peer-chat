/**
 * Register routes
 *
 * @module routes/register.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const router = require('express').Router()
 const User = require('../models/User')
 const checkError = require('../lib/checkError')
 const misc = require('../lib/misc')

 router.route('/')
     .get((req, res) => res.render('register'))

     .post(async (req, res) => {
       try {
         const user = new User({
           fullName: req.body.fullName,
           email: req.body.email,
           password: req.body.password,
           avatar: misc.randomAvatar()
         })

         if (req.body.password !== req.body.passwordRepeat) {
           req.session.flash = {
             type: 'danger',
             message: 'The passwords do not match!'
           }

           res.redirect('back')
         } else {
           await user.save()

           req.session.flash = {
             type: 'success',
             message: 'Account successfully created!'
           }

           res.redirect('/login')
         }
       } catch (err) { checkError(err, req, res) }
     })

 module.exports = router
