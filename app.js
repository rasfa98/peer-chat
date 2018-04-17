/**
 * Starting point of the application.
 *
 * @module ./app.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const mongoose = require('./config/mongoose')
 const express = require('./config/express')
 const path = require('path')
 const passportConfig = require('./config/passport')
 const passport = require('passport')
 const session = require('express-session')
 const MongoStore = require('connect-mongo')(session)
//  const csrf = require('csurf')

 const app = express.run()

 mongoose.run(app).catch(err => {
   console.log(err)
   process.exit(1)
 })

 app.use(session({
   name: 'PeerChat',
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
   store: new MongoStore({ url: app.get('connectionString') }),
   cookie: {
     secure: false,
     expires: 900000
   }
 }))

 app.use((req, res, next) => {
   passportConfig.run(req)

   next()
 })

//  app.use(csrf())

//  app.use((req, res, next) => {
//    res.locals.csrfToken = req.csrfToken()
//    next()
//  })

 app.use(passport.initialize())

 app.use((req, res, next) => {
   res.locals.login = req.session.login
   res.locals.userId = req.session.userId
   next()
 })

 app.use((req, res, next) => {
   res.locals.flash = req.session.flash
   delete req.session.flash
   next()
 })

 app.use('/', require('./routes/index'))
 app.use('/user', require('./routes/user'))
 app.use('/chat', require('./routes/chat'))
 app.use('/login', require('./routes/login'))
 app.use('/signout', require('./routes/signout'))
 app.use('/register', require('./routes/register'))
 app.use('/auth', require('./routes/auth'))

 app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'views', 'errors', '404.html')))

 app.use((err, req, res, next) => {
   console.log(err)
   return res.status(500).sendFile(path.join(__dirname, 'views', 'errors', '500.html'))
 })
