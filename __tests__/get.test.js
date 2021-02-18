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

it('should respond with specific character data', async (done) => {
    const myData = {
        results: {
            name: 'Ariel',
            species: 'mythical being',
            role: 'hero',
            unique_power: 'enchanting singing voice',
            movie: 'The Little Mermaid',
            movie_year: 1989,
            hand_drawn: true,
            image: 'https://lumiere-a.akamaihd.net/v1/images/b_disneyprincess_updates_mobile_ariel_19273_ca84d9d1.jpeg?region=0,0,640,709',
            gif: 'https://www.readunwritten.com/wp-content/uploads/ariel-gif.gif'
        }
    }
    const response = await request.get('/characters/Ariel')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(myData)
    done()
})
