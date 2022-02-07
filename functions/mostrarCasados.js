const pessoas = require('./pessoas.json');

const casados = pessoas.filter(function(pessoa){
    return pessoa.casado 
});

console.table(casados); 