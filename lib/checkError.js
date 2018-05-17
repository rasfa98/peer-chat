'use strict'

module.exports = (err, req, res) => {
  if (err.name === 'ValidationError') {
    req.session.flash = {
      type: 'danger',
      message: err.errors[Object.keys(err.errors)[0]].message
    }

    res.redirect('back')
  }

  if (err.name === 'BulkWriteError') {
    req.session.flash = {
      type: 'danger',
      message: 'A user with this email already exists, you might have signed in with Facebook/Google?'
    }

    res.redirect('back')
  }

  console.log('ERROR:', err)
}
