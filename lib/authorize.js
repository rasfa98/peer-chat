'use strict'

module.exports = (req, res, next) => !req.session.login ? res.redirect('/login') : next()
