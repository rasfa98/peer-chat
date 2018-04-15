const expect = require('chai').expect
const supertest = require('supertest')

const server = supertest.agent('http://localhost:8000')

describe('API', () => {

  describe('/GET /pagedoesnotexist', () => {

    it('should return a 404 not found', done => {
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
})
