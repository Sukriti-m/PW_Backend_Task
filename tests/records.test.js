const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const dataset = require('../src/data/dataset'); 

const { expect } = chai;
chai.use(chaiHttp);

// Test case for addRecord function
describe('API Tests', () => {
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
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('array');
          done();
        });
    });
  });
});
