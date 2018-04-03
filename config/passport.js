/**
 * Passport configuration.
 *
 * @module config/passport.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const passport = require('passport')
 const GoogleStrategy = require('passport-google-oauth20')
 const FacebookStrategy = require('passport-facebook')
 const User = require('../models/User')

 /**
  * Configures the different strategies.
  */
 module.exports.run = () => {
   passport.serializeUser((user, done) => {
     done(null, user.id)
   })

   passport.deserializeUser((id, done) => {
     User.findById(id).then(user => {
       done(null, user)
     })
   })

   passport.use(new GoogleStrategy({
     callbackURL: 'https://rasmusfalk.se/auth/google/redirect',
     clientID: process.env.GOOGLE_CLIENT_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET
   }, (accessToken, refreshToken, profile, done) => {
     User.findOne({ googleId: profile.id }).then(currentUser => {
       if (currentUser) {
         done(null, currentUser)
       } else {
         new User({
           username: null,
           fullName: profile.displayName,
           googleId: profile.id,
           password: null
         }).save().then(newUser => {
           done(null, newUser)
         })
       }
     })
   }))

   passport.use(new FacebookStrategy({
     callbackURL: 'https://rasmusfalk.se/auth/facebook/redirect',
     clientID: process.env.FACEBOOK_APP_ID,
     clientSecret: process.env.FACEBOOK_APP_SECRET
   }, (accessToken, refreshToken, profile, done) => {
     User.findOne({ facebookId: profile.id }).then(currentUser => {
       if (currentUser) {
         done(null, currentUser)
       } else {
         new User({
           username: null,
           fullName: profile.displayName,
           facebookId: profile.id,
           password: null
         }).save().then(newUser => {
           done(null, newUser)
         })
       }
     })
   }))
 }
