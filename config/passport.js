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
const User = require('../models/User')

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
    callbackURL: '/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(currentUser => {
      if (currentUser) {
        done(null, currentUser)
      } else {
        new User({
          username: profile.displayName,
          googleId: profile.id
        }).save().then(newUser => {
          done(null, newUser)
        })
      }
    })
  }))
}
