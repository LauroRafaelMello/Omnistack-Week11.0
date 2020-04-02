const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Omnistack Week 11.0',
        aluno: 'Lauro Rafael Mello'
    })
});

app.listen(3333);