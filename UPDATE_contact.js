const { expect } = require('chai');
const supertest = require('supertest');

describe('UPDATE  contact', () => {
    

    it('success update contact ', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').patch('/contacts/662cebbd73f1690013762ef9').send(
            {
                "firstName": "Anton"
            }
        ).set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZTM2MzczZjE2OTAwMTM3NjJlZTEiLCJpYXQiOjE3MTQyMTc4Mjd9.DwHoAOzja5pMEAQllDOLmS5LPlPy9n8pl_T4amBNTrI').timeout(10000)
       
        console.log(response.body);
    })
})