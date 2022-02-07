const fs = require('fs');
const pessoas = require('./pessoas.json');

//passo 1 capturar o numero digitado pelo usuario

const removedor = process.argv[2];

//passo 2 importar array de pessoas

//passo 3 remover a pessoa da posição desejada

pessoas.splice(removedor, 1);

//passo 4 salvar o array modificado no arquivo

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas,null,4));