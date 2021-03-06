'use strict';

const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Conexão com o BD
connectDB();

//Iniciar Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Bem vindo a API da agenda eletrônica...'}));

//Carregar as rotas
const usersRoute = require('./routes/users');
const contactsRoute = require('./routes/contacts');
const authRoute = require('./routes/auth');


app.use('/api/users', usersRoute);
app.use('/api/contacts', contactsRoute);
app.use('/api/auth', authRoute);

 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));