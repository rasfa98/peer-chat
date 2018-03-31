module.exports = (req, res, next) => {
  if (!req.session.login) {
    res.redirect('/login')
  }

  next()
}
