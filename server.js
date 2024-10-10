const express = require('express');
const request = require('request');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    request(url).pipe(res);
});

app.listen(8080, () => {
    console.log('CORS proxy running on port 8080');
});
