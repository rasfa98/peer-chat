/**
 * User model tests.
 *
 * @module test/User.test.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const expect = require('chai').expect
 const User = require('../models/User')

 describe('User model validation', () => {
   it('should be able to register a user if all details are provided', done => {
     const user = new User({
       fullName: 'test test',
       password: 'test123',
       email: 'test@test.se'
     })

     user.validate(err => {
       expect(err).to.not.exist
       done()
     })
   })

   it('should not be able to register a user without a full name', done => {
     const user = new User({
       fullName: null,
       password: 'test123',
       email: 'test@test.se'
     })

     user.validate(err => {
       expect(err.errors.fullName).to.exist
       done()
     })
   })

   it('should not be able to register a user with a full name that contains invalid characters', done => {
     const user = new User({
       fullName: 'test123',
       password: 'test123',
       email: 'test@test.se'
     })

     user.validate(err => {
       expect(err.errors.fullName).to.exist
       done()
     })
   })

   it('should not be able to register a user with a full name longer than 20 characters', done => {
     const user = new User({
       fullName: 'test123123123123123123123123123123123123',
       password: 'test123',
       email: 'test@test.se'
     })

     user.validate(err => {
       expect(err.errors.fullName).to.exist
       done()
     })
   })

   it('should not be able to register a user without an email address', done => {
     const user = new User({
       fullName: 'test',
       password: 'test123',
       email: null
     })

     user.validate(err => {
       expect(err.errors.email).to.exist
       done()
     })
   })

   it('should not be able to register a user with an email address longer than 50 characters', done => {
     const user = new User({
       fullName: 'test',
       password: 'test123',
       email: 'test@testtesttesttesttesttesttesttesttesttesttesttesttest.se'
     })

     user.validate(err => {
       expect(err.errors.email).to.exist
       done()
     })
   })

   it('should not be able to register a user with an email address using a invalid format', done => {
     const user = new User({
       fullName: 'test',
       password: 'test123',
       email: 'test'
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

   it('should not be able to register a user with a password longer than 30 characters', done => {
     const user = new User({
       fullName: 'test',
       password: 'test123123123123123123123123123123123123123123123123123123123123123123123123',
       email: 'test@test.se'
     })

     user.validate(err => {
       expect(err.errors.password).to.exist
       done()
     })
   })

   it('should not be able to register a user with a password shorter than 5 characters', done => {
     const user = new User({
       fullName: 'test',
       password: 'test',
       email: 'test@test.se'
     })

     user.validate(err => {
       expect(err.errors.password).to.exist
       done()
     })
   })
 })
