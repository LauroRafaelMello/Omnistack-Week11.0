const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Exemplo para fazer o app ser acessado somente de sites específicados
//app.use(cors( {
//    origin: 'http://meuapp.com'
//}));
//Da forma abaixo da acesso para qualquer site acessar nosso app
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);