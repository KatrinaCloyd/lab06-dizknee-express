const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})