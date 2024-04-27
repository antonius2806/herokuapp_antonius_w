
const { expect } = require('chai');
const supertest = require('supertest');

describe('POST add user', () => {

    it('success post user ', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').post('/users').send(
            {
                "firstName": "antonius",
                "lastName": "wicak",
                "email": "teamlo@yahoo.com",
                "password": "antonwicak"
            }
        )
        console.log(response.body)
        expect(response.status)

    })
})