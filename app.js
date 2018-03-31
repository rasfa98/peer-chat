const mongoose = require('./config/mongoose')
const express = require('./config/express')
const passport = require('./config/passport')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const app = express.run()

mongoose.run(app).catch(err => {
  console.log(err)
  process.exit(1)
})

passport.run()

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
  res.locals.login = req.session.login
})

app.use('/', require('./routes/index'))
app.use('/chat', require('./routes/chat'))
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))

app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'views', 'errors', '404.html')))

app.use((err, req, res, next) => {
  console.log(err)
  return res.status(500).sendFile(path.join(__dirname, 'views', 'errors', '500.html'))
})
