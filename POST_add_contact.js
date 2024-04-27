const { expect } = require('chai');
const supertest = require('supertest');

describe('POST add contact', () => {

    it('success post contact ', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').post('/contacts').send(
            {
                "firstName": "John",
                "lastName": "Doe",
                "birthdate": "1970-01-01",
                "email": "jdoe@fake.com",
                "phone": "8005555555",
                "street1": "1 Main St.",
                "street2": "Apartment A",
                "city": "Anytown",
                "stateProvince": "KS",
                "postalCode": "12345",
                "country": "USA"
            }
        ).set('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZTM2MzczZjE2OTAwMTM3NjJlZTEiLCJpYXQiOjE3MTQyMTc4Mjd9.DwHoAOzja5pMEAQllDOLmS5LPlPy9n8pl_T4amBNTrI')
       
      
        console.log(response.body)
        expect(response.status)
    })
})