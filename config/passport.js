'use strict'

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const FacebookStrategy = require('passport-facebook')
const User = require('../models/User')
const uniqId = require('uniqid')
const avatar = require('../lib/avatar')

module.exports.run = (req) => {
  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)

    done(null, user)
  })

  // Google strategy
  passport.use(new GoogleStrategy({
    callbackURL: 'https://rasmusfalk.se/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value

    const currentUser = await User.findOne({ email: email })

    if (currentUser) {
      req.session.userId = currentUser._id
      done(null, currentUser)
    } else {
      const newUser = new User({
        fullName: profile.displayName,
        email: email,
        password: uniqId(),
        avatar: avatar()
      })

      await newUser.save()

      const user = await User.findOne({ email: email })

      req.session.userId = user._id

      done(null, newUser)
    }
  }))

  // Facebook strategy
  passport.use(new FacebookStrategy({
    callbackURL: 'https://rasmusfalk.se/auth/facebook/redirect',
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    profileFields: ['displayName', 'email']
  }, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value

    const currentUser = await User.findOne({ email: email })

    if (currentUser) {
      req.session.userId = currentUser._id
      done(null, currentUser)
    } else {
      const newUser = new User({
        fullName: profile.displayName,
        email: email,
        password: uniqId(),
        avatar: avatar()
      })

      await newUser.save()

      const user = await User.findOne({ email: email })

      req.session.userId = user._id

      done(null, newUser)
    }
  }))
}
