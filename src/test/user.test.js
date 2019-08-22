/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable eol-last */

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
//Remember babel transform runtime
// GOOD  no any asnyc await import indexRouter from '../routes/index';

chai.should();
chai.use(chaiHttp);


describe('Test to determine that testing  is working', function() {
  describe('Get /api/v1/auth', function() {
    it('It should get /api/v1/auth', function(done) {
      chai.request(app)
        .get('/api/v1/auth')
        .end((err, res) => {
          res.should.be.json;
          res.body.should.have.property('status');
          res.body.status.should.equal('Authentication Working');
          done();
        });
    });
  });
}); 

/* describe('Test For Users Endpoint', function() {
  describe('POST /api/v1/auth/signup', function() {
    it('should signup a user', function(done) {
      chai.request('http://localhost:8080')
        .post('/api/v1/auth/signup')
        .send({ email: 'seun15@beeline.com', first_name: 'Seun1', last_name: 'Olaifa1', password: 'P@ssw0rd' })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.equal('success');
          done();
        });
    });
  });
}); */


