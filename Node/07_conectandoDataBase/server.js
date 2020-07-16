// INSTALE O MONGOOSE POR MEIO DO npm install mongoose


const express = require('express');
const mongoose = require('mongoose');


// INICIANDO O APP
const app = express();


// INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true});

// PRIMEIRA ROTA
app.get('/',(req, res) => {
    res.send('Ola mundo t2!');
})

app.listen(3001);