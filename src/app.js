const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(routes);

app.listen('3001', () => console.log('Servidor rodando na porta 3001'));
