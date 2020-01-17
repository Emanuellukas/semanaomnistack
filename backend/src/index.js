const express = require('express');//Biblioteca que agiliza a burocracia das configurações de Rota do Node
const mongoose = require('mongoose');//Biblioteca que conecta nossa aplicação ao banco hospedado no cluster da MongoDB
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://root:toor@cluster0-gpoza.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});//Conectando no banco

//Autorizando o Express pra que ele entenda JSON como formato válido para fazer requisições (POST ou PUT)
app.use(express.json());//Deve vir antes das rotas
app.use(routes);

app.listen(3333);