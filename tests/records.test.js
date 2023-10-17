const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const dataset = require('../src/data/dataset'); 

const { expect } = chai;
chai.use(chaiHttp);
const user = { userID: 'Admin', password: 'Admin123' };
let token;

// Test case for addRecord function
describe('Records API Tests', () => {
  before((done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });
  describe('POST /api/v1/records/add', () => {
    it('should add a new record', (done) => {
      const newRecord = {
        name: 'John Doe',
        salary: '50000',
        department: 'Engineering',
        sub_department: 'Platform',
      };

      chai
        .request(app)
        .post('/api/v1/records/add')
        .set('Authorization', token)
        .send(newRecord)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a('array');
          done();
        });
    });
  });

  // Test case for deleteRecord function
  describe('DELETE /api/v1/records/delete/:id', () => {
    it('should delete a record', (done) => {
      const index = dataset[0];

      chai
        .request(app)
        .delete(`/api/v1/records/delete/${index}`)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('array');
          done();
        });
    });
  });
});
