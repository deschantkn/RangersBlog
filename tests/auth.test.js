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

  describe('POST - /api/auth/signin', () => {
    const user1 = {
      names: 'Test User',
      email: 'yo@mail.com',
      password: '1234erty',
    };

    chai
      .request(app)
      .post('/api/auth/signup')
      .send(user1)
      .end();

    it('it should login an existing user', (done) => {
      const user = {
        email: 'd@mail.com',
        password: '1234qwerty',
      };

      chai
        .request(app)
        .post('/api/auth/signin')
        .send(user1)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('token');
          done();
        });
    });
  });
});
