const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,etc)
const cors = require('cors')

const app = express();

//importações
const usuario = require('./src/controllers/UsuarioController');
const questao = require('./src/controllers/QuestaoController');

//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res)=> res.send('Estou aqui'))
app.use('/usuario', usuario);
app.use('/questao', questao);

module.exports = app

