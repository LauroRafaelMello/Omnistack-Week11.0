const express = require('express');

const app = express();

app.use(express.json());

/*
* Métodos HTTP:
* GET: Buscar uma informação no backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend
* DELETE: Deletar uma informação no backend
*/

/*
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para identicar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/

app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Omnistack Week 11.0',
        aluno: 'Lauro Mello'
    })
});

app.listen(3333);