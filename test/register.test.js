const expect = require('chai').expect
const User = require('../models/User')

describe('Register', () => {

  it('should not be able to register a user without a full name', done => {
    const user = new User({
      fullName: null,
      password: 'test',
      email: 'test@test.se'
    })

    user.validate(err => {
      expect(err.errors.fullName).to.exist
      done()
    })
  })

  it('should not be able to register a user without a email address', done => {
    const user = new User({
      fullName: 'test',
      password: 'test',
      email: null
    })

    user.validate(err => {
      expect(err.errors.email).to.exist
      done()
    })
  })

  it('should not be able to register a user without a password', done => {
    const user = new User({
      fullName: 'test',
      password: null,
      email: 'test@test.se'
    })

    user.validate(err => {
      expect(err.errors.password).to.exist
      done()
    })
  })
})
