const { app } = require('../app.js')
const supertest = require('supertest')
const { characters } = require('../data.js');
const request = supertest(app)

it('should respond with all character data', async (done) => {
    const myData = { results: characters }
    const response = await request.get('/characters')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(myData)
    done()
})
