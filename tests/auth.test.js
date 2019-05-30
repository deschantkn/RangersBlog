import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();

chai.use(chaiHttp);

describe('Authentication', () => {
  describe('POST - /api/auth/signup', () => {
    it('it should create a new user account', (done) => {
      const user = {
        names: 'Deschant Kounou',
        email: 'd@mail.com',
        password: '1234qwerty',
      };

      chai
        .request(app)
        .post('/api/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it('it should not create a new user account with invalid user object', (done) => {
      const user = {
        names: 'Test User',
        email: 'dmail.com',
        password: 'dfdfdfdf',
      };

      chai
        .request(app)
        .post('/api/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
    });
  });
});
