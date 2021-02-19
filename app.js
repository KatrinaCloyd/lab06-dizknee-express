const express = require('express')
const cors = require('cors');
const app = express()
const { characters } = require('./data.js');
app.use(cors());


app.get('/characters', (req, res) => {
    res.json({ results: characters });
})

app.get('/characters/:name', (req, res) => {
    const id = req.params.name;

    const selectedCharacter =
        characters.find((char) => char.name === id);

    res.json({ results: selectedCharacter });
});

module.exports = {
    app
};