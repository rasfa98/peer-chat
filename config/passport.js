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
  passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }, async (accessToken, refreshToken, profile, done) => {
    const current = await User.findOne({ googleId: profile.id })

    if (!current) {
      const user = new User({
        username: profile.displayName,
        googleId: profile.googleId
      })

      user.save()
    }

    console.log('hej')

    done()
  }))
}
