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
})
