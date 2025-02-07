const express = require('express');
const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
