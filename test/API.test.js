'use strict'

const expect = require('chai').expect
const supertest = require('supertest')

const server = supertest.agent('http://localhost:8000')

describe('API /GET', () => {

  describe('/pagedoesnotexist', () => {

    it('should return 404 not found', done => {
      server
      .get('/pagedoesnotexist')
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        expect(res.body.error).to.not.exist
        done()
      })
    })
  })

  describe('user/current', () => {

    it('should return 200', done => {
      server
      .get('/user/current')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.error).to.not.exist
        done()
      })
    })
  })

  describe('user/friends', () => {

    it('should return 200', done => {
      server
      .get('/user/friends')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.error).to.not.exist
        done()
      })
    })
  })
})
