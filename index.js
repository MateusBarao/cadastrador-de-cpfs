// Importar a biblioteca "express"

const express = require('express');

// Utilizar o express para criar um servidor

const servidor = express();

// Definir uma rota e associar a ela a execução de uma função

servidor.get('/pessoas', (req, res)=>{
    console.log("Tentaram acessar a rota /pessoas");
    res.send("lista de pessoas: Leo, Pedro, Wendel, etc.")
});

servidor.get('/ip', (req, res)=>{
    

});

// Levantar o nosso servidor

servidor.listen(3000, ()=>{
    console.log('servidor escutando na porta 3000');
});