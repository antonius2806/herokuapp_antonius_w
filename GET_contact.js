const { expect } = require('chai');
const supertest = require('supertest');

describe('get contact', () => {

    it('sucess get contact', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').get('/contacts/').set('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZTM2MzczZjE2OTAwMTM3NjJlZTEiLCJpYXQiOjE3MTQyMTc4Mjd9.DwHoAOzja5pMEAQllDOLmS5LPlPy9n8pl_T4amBNTrI')
        console.log(response.body);
        expect(response.status);
        expect(response.status).equal(200);
    })
}
)