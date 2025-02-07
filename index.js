const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        response: 'hello world!'
    });
});

app.get('/test', (req, res) => {
    res.json({
        response: 'test request'
    })
})

module.exports = app; // Vercel auto-detects this
